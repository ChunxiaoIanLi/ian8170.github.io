


function refreshPage(){
  $('#main').trigger("pagecreate");
}

function loadHeader(title) {
  var htmlHeader = "<div data-role='header'><h1>"+title+"</h1></div>";
  $('#header').html(htmlHeader);

}

function loadFooter() {
  var htmlFooter = "<div data-role='footer' data-position='fixed'><div data-role='navbar' data-iconpos='right'><ul><li><a href='#' data-icon='back'>Back</a></li><li><a href='index.html' data-icon='home'>Home</a></li><li><a href='content_nav.html' data-icon='grid'>Content</a></li></ul></div><!-- /navbar --></div><!-- /footer -->";
  $('#footer').html(htmlFooter); 
}

function loadContent(name) {
  var text = exercise[1.0];
  console.log("text"+text);
  var htmlContent =  "<div data-role='content'>"+text+"</div>";
  $('#body').html(htmlContent);

}

function switchPage(section) {
  loadFooter();
  loadContent(section);
  loadHeader("Shyness and Social Anxiety");

  
  refreshPage();
  $('html, body').animate({ scrollTop: 0 }, 'fast');
}