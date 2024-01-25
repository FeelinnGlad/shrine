const $titles = document.querySelector('#titles');
const $titlesimg = $titles.querySelectorAll(':scope > img');
let $loader = document.createElement('div');
$loader.setAttribute("id", "loader");
$loader.innerHTML = `
	<div id="wrap" style="display: flex; justify-content: center; align-items: center; min-height: 100%; 
	background-color: aliceblue; top:0; position: absolute; text-align: center; font-family: 'a_LCDNova', serif">
            <div id="content">
            	<img src="media/loader.gif" />
                <h3>Loading...</h3>
            </div>
        </div>
`;
$titlesimg.forEach(child => {
	child.addEventListener("click", () => navigateMainWindow(child.id))
})

function navigateMainWindow(id) {
	switch (id) {
		case ("initial-d") : {
			// document.getElementById('pdf-preview').src = `https://shuichishigeno.neocities.org/pages/${id}`;
			document.getElementById('pdf-preview').src = `https://shuichishigeno.neocities.org/pages/${id}`;
			break;
		}
		default : {
			document.getElementById('pdf-preview').src = `https://shuichishigeno.neocities.org/not_found`;
		}
	}
	// document.getElementById('pdf-preview').src = `https://shuichishigeno.neocities.org/pages/${child.id}`;
	// document.getElementById('pdf-preview').src = `https://shuichishigeno.neocities.org/not_found`;
	document.getElementById('main-blank').append($loader);
}

document.getElementById('pdf-preview').addEventListener('load', function(e) {
	setTimeout(() => document.getElementById("loader").remove(), 500)
	// document.getElementById("loader").remove();
});

document.getElementById('header').addEventListener('click', () => {
	document.getElementById('pdf-preview').src = `https://shuichishigeno.neocities.org/pages/home`;
	document.getElementById('main-blank').append($loader);
})