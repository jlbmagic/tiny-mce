import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "regenerator-runtime/runtime.js";

window.loadEditor = function (data) {
  const elemDiv = document.createElement("textarea");
  const newCreate = document.body.appendChild(elemDiv);
  newCreate.setAttribute("id", "html");
  const area = document.getElementById("html");
  area.setAttribute("min-height", "300px");
  area.setAttribute("width", "50%");
  area.innerHTML = data;

  const btn = document.createElement("button");
  const createBtn = document.body.appendChild(btn);
  createBtn.setAttribute("id", "btn");
  createBtn.innerHTML = "SAVE";

  createBtn.addEventListener("click", saveForm);

  tinymce.init({
    selector: "textarea",

    forced_root_block: false,
    menubar: false,
    statusbar: false,
    contextmenu: false,
    //toolbar: false,

    cleanup: false,
    paste_data_images: true,

    plugins: [
      "quickbars advlist autolink link image lists hr anchor pagebreak codesample",
      "searchreplace wordcount visualblocks visualchars code insertdatetime media nonbreaking",
      "table template paste help",
    ],

    quickbars_insert_toolbar: "",
    quickbars_selection_toolbar:
      "bold italic underline strikethrough | forecolor backcolor| link  | removeformat",

    toolbar:
      "searchreplace | insertdatetime | fontselect | fontsizeselect | paragraphgroup insertgroup hr codesample",
    toolbar_groups: {
      paragraphgroup: {
        icon: "paragraph",
        tooltip: "Paragraph format",
        items:
          "h1 h2 h3 | bullist numlist  | alignleft aligncenter alignright alignjustify | indent outdent",
      },
      insertgroup: {
        icon: "plus",
        tooltip: "Insert",
        items: "image media table hr nonbreaking code wordcount",
      },
    },
    // toolbar_location: 'bottom',
    toolbar_mode: "floating",

    fontsize_formats:
      "8pt 9pt 10pt 11pt 12pt 13pt 14pt 16pt 18pt 24pt 30pt 36pt 48pt ",
    content_style: "body {font-size: 10pt;}",

    insertdatetime_formats: ["✏️(%d/%m/%Y  -  %Hh%M)"],

    // languages for the Code button
    codesample_languages: [
      { text: "HTML/XML", value: "markup" },
      { text: "JavaScript", value: "javascript" },
      { text: "CSS", value: "css" },
    ],

    content_css: "default",
  });
};
function saveForm() {
  var theParam = tinyMCE.get("html").getContent();
  FileMaker.PerformScriptWithOption("RTE-exit", theParam, 5);
}
