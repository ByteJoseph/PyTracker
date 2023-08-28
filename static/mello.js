// Replace YOUR_API_TOKEN with your actual API token from ipinfo.io
function getInputVal(id) {
   return document.getElementById(id).value;
}
function go(){
   var name = getInputVal('tex');
   if (name==""){
      
      alert("Can't search empty ip");
   

   }
   else{
      // Replace 'https://www.example.com' with the URL you want to redirect to
      window.location.href = '/'+name;
  }
}
var nme = getInputVal('tex');
const ipInfoApiUrl = 'https://ipinfo.io/'+nme+'?token=968f536b99af46';
    
    // Replace YOUR_IPDATA_API_KEY with your actual API key from ipdata.co
const ipDataApiKey = 'YOUR_IPDATA_API_KEY';
const ipDataApiUrl = `https://api.ipdata.co?api-key=${ipDataApiKey}`;

    // Function to fetch IP address details
function getIPDetails() {
      fetch(ipInfoApiUrl)
        .then(response => response.json())
        .then(data => {
          const ipDetailsDiv = document.getElementById('ipDetails');
          let detailsHTML = `
            <p><strong>Your Address:</strong> ${data.ip}</p>
            <p><strong>City:</strong> ${data.city}</p>
            <p><strong>Region:</strong> ${data.region}</p>
            <p><strong>Country:</strong> ${data.country}</p>
            <p><strong>Location:</strong> ${data.loc}</p>
            <p><strong>ISP:</strong> ${data.org}</p>
          `;
          ipDetailsDiv.innerHTML = detailsHTML;

          // Check if VPN is active
          //checkVPNStatus(data.ip);
        })
        .catch(error => {
          const ipDetailsDiv = document.getElementById('ipDetails');
          ipDetailsDiv.innerHTML = `<p>Error fetching IP address details: ${error.message}</p>`;
        });
    }
function showIPDetails() {
      const ipDetailsDiv = document.getElementById('ipDetails');
      ipDetailsDiv.style.opacity = 1;
      ipDetailsDiv.style.transform = 'translateY(0)';
    }

    // Function to check if VPN is active
function checkVPNStatus(ipAddress) {
      fetch(`${ipDataApiUrl}&ip=${ipAddress}`)
        .then(response => response.json())
        .then(data => {
          const ipDetailsDiv = document.getElementById('ipDetails');
          if (data && data.threat.is_vpn) {
            ipDetailsDiv.innerHTML += `<p><strong>VPN Status:</strong> VPN is active</p>`;
          } else {
            ipDetailsDiv.innerHTML += `<p><strong>VPN Status:</strong> VPN is not active</p>`;
          }
        })
        .catch(error => {
          const ipDetailsDiv = document.getElementById('ipDetails');
          ipDetailsDiv.innerHTML += `<p>Error checking VPN status: ${error.message}</p>`;
        });
    }

    // Call the function to get IP address details when the page loads
getIPDetails();