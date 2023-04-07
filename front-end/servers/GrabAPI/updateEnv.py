import os
import socket
import re

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("8.8.8.8", 80))
ip_address = s.getsockname()[0]
print(ip_address)
s.close()

try:
    import re

    # Open the .env file and read its contents
    with open('../../.env', 'r') as f:
        env_contents = f.read()

    # Check if the GRAB_SCRAPPER_URL line is present
    if not re.search(r'^\s*GRAB_SCRAPPER_URL\s*=', env_contents, flags=re.MULTILINE):
        # If it's not present, add it to the end of the file
        env_contents += '\nGRAB_SCRAPPER_URL = ' + ip_address + ':5000'

    # Otherwise, find and replace the line that starts with GRAB_SCRAPPER_URL
    else:
        env_contents = re.sub(r'^\s*GRAB_SCRAPPER_URL\s*=\s*.*$', f'GRAB_SCRAPPER_URL = {ip_address}:5000', env_contents, flags=re.MULTILINE)

    # Write the updated contents back to the .env file
    with open('../../.env', 'w') as f:
        f.write(env_contents)

except:
    print("Unable to update .env file. Please manually update the GRAB_SCRAPPER_URL file.")