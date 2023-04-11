
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre> 


    __ __ __________  ____  _____   ____    ___    ____ _____
   / //_// ____/ __ \/ __ )/  _/ | / / /   /   |  / __ ) ___/
  / ,<  / __/ / /_/ / __  |/ //  |/ / /   / /| | / __  \__ \ 
 / /| |/ /___/ _, _/ /_/ // // /|  / /___/ ___ |/ /_/ /__/ / ,&lt;
/_/ |_/_____/_/ |_/_____/___/_/ |_/_____/_/  |_/_____/____/  
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
