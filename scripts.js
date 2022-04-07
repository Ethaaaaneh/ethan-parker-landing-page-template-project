//ifelseifelseifelseifelseifelseifelseifelseifelseifelseifelseifelseifelse
function switchVisible() {
    if (document.getElementById('side-buttons')) {
  
        if (document.getElementById('side-buttons').style.display == 'none') {
            document.getElementById('side-buttons').style.display = 'block';
            document.getElementById('search').style.display = 'none';
        }
        else {
            document.getElementById('side-buttons').style.display = 'none';
            document.getElementById('search').style.display = 'flex';
        }
    }
  }