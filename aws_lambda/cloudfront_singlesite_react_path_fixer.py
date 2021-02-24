import json

# GET ALL File extensions in a dir: ls -R build | perl -e 'while(<>){chomp; if (/^\-rw/){ print "$_\n";}}' | awk -F\. '{ print $NF}' | sort -u
good_file_extensions = [
    'css',
    'html',
    'ico',
    'js',
    'json',
    'map',
    'png',
    'txt',
]


sites = {
    '/site1': {
        'home': '/site1/index.html'
    }
}

def lambda_handler(event, context):
    request = event['Records'][0]['cf']['request']
    request_path = request['uri']

    # Detect requests to any files with extensions listed in the good_file_extensions list. Allow direct request access of they are present
    if '.' in request_path:
        if request_path.split('.')[-1] in good_file_extensions:
            return request
    
    # Determine the final site to target
    site = None
    try:
        site = '/{}'.format(request_path.split('/')[1])
    except:
        site = '/site1'
        
    # If a target site is not in the list of sites, fall back to the default site
    if site not in sites:
        site = '/site1'
        
    # if the current requests targets any of the configured sites home pages, pass the request through
    destination = sites[site]['home']
    index = '{}/index.html'.format(site)
    if request_path == destination or request_path == index:
        return request
    
    # Build a redirect URI for the target site to handle. The original request path portion will be set as a "target" query parameter.
    redirectUrl = 'https://{}{}?target={}'.format(
        request['headers']['host'][0]['value'],
        destination,
        request_path
    )
    
    # Prepare the final redirect response - refer to https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-generating-http-responses-in-requests.html#lambda-generating-http-responses-object
    response = {
        'status': '302',
        'statusDescription': 'Found',
        'headers': {
            'location': [{
                'key': 'Location',
                'value': '{}'.format(redirectUrl)
            }]
        }
    }
    return response
