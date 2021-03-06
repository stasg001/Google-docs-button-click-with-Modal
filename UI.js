class UI {

    //#region Modal Menu Static Method
    static modalMenu(){

        const modal = document.createElement('div');
        modal.setAttribute("id", "modalMenu");
        modal.classList.add("modal");
        modal.style.cssText = `
            all: unset;
            font-family: Helvetica Neue;
            font-size: 12px;
            margin: 0;
            padding: 0;
            display: block;
            position: fixed;
            z-index: 100000;
            right: 140px;
            top: 200px;
            width: 1000px;
            height:1000px;
            overflow: auto;
            background-color: rgba(0,0,0, 0);
            animation-name: modalopen;
            animation-duration: 0.5s;
        `;

        const modalContent = document.createElement('div');
        modalContent.classList.add("modal-content");
        //modalContent.innerHTML.UI.className
        modalContent.style.cssText = `
            all: unset;
            background-color: #f4f4f4;
            position: relative;
            float: right;
            padding: 20px;
            width: 300px;
            height: 320px;
            max-width: 140px !important;
            max-height: 220px !important;
            box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.17);
            border-radius: 5px;
        `;
        modalContent.innerHTML = `
        <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Google Docs click simulation</title>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <style>
         .w3-button {width:250px;}
         .dropbtn {
         background-color: #4CAF50;
         color: white;
         padding: 16px;
         font-size: 16px;
         border: none;
         }
         .dropdown {
         position: relative;
         display: inline-block;
         }
         .dropdown-content {
         display: none;
         position: absolute;
         background-color: #f1f1f1;
         min-width: 160px;
         box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
         z-index: 1;
         }
         .dropdown-content a {
         color: black;
         padding: 12px 16px;
         text-decoration: none;
         display: block;
         }
         .dropdown-content a:hover {background-color: #ddd;}
         .dropdown:hover .dropdown-content {display: block;}
         .dropdown:hover .dropbtn {background-color: #3e8e41;}
         .tab-folder > .tab-content:target ~ .tab-content:last-child, .tab-folder > .tab-content {
         display: none;
         }
         .tab-folder > :last-child, .tab-folder > .tab-content:target {
         display: block;
         }
         a:link, a:visited {
         background-color: #f44336;
         color: white;
         padding: 15px 25px;
         text-align: center;
         text-decoration: none;
         display: inline-block;
         }
         a:hover, a:active {
         background-color: gray;
         }
         button{
            width:50%;
         }
         li{
            width:50%;
         }
      </style>
   </head>
        <body>
        <p><button id="file" class="w3-button w3-blue">File</button></p>
        <div class="dropdown-content">
           <p><button id="share" class="w3-button w3-green">Share</button></p>
           <div class="dropdown">
              <p><button id="new" class="w3-button w3-green">New</button></p>
              <div class="dropdown">
                 <p><button id="documentnew" class="w3-button w3-yellow" >Document</button></p>
                 <p><button id="fromtemplate" class="w3-button w3-yellow">From template</button></p>
                 <p><button id="spreadsheet" class="w3-button w3-yellow">Spreadsheet</button></p>
                 <p><button id="presentation" class="w3-button w3-yellow">Presentation</button></p>
                 <p><button id="form" class="w3-button w3-yellow">Form</button></p>
                 <p><button id="drawingnew" class="w3-button w3-yellow">Drawing</button></p>
              </div>
           </div>
           <p><button id="open" class="w3-button w3-green">Open</button></p>
           <p><button id="makeacopy" class="w3-button w3-green">Make a copy</button></p>
           <p><button id="email" class="w3-button w3-green" >Email</button></p>
           <p><button id="download" class="w3-button w3-green">Download</button></p>
           <p><button id="makeavailableoffline" class="w3-button w3-green">Make available offline</button></p>
           <p><button id="versionhistory" class="w3-button w3-green">Version history</button></p>
           <p><button id="rename" class="w3-button w3-green">Rename</button></p>
           <p><button id="move" class="w3-button w3-green">Move</button></p>
           <p><button id="addshortcuttodrive" class="w3-button w3-green">Add shortcut to Drive</button></p>
           <p><button id="movetotrash" class="w3-button w3-green" >Move to trash</button></p>
           <p><button id="publishtotheweb" class="w3-button w3-green">Publish to the web</button></p>
           <p><button id="documentdetails" class="w3-button w3-green">Document details</button></p>
           <p><button id="language" class="w3-button w3-green">Language</button></p>
           <p><button id="pagesetup" class="w3-button w3-green">Page setup</button></p>
           <p><button id="printfile" class="w3-button w3-green">Print</button></p>
        </div>
     </div>
     <div class="dropdown">
        <p><button id="edit" class="w3-button w3-blue">Edit</button></p>
        <div class="dropdown-content">
           <p><button id="undoedit" class="w3-button w3-green">Undo</button></p>
           <p><button id="redoedit" class="w3-button w3-green">Redo</button></p>
           <p><button id="cut" class="w3-button w3-green">Cut</button></p>
           <p><button id="copy" class="w3-button w3-green">Copy</button></p>
           <p><button id="paste" class="w3-button w3-green" >Paste</button></p>
           <p><button id="pastewithoutformatting" class="w3-button w3-green">Paste without formatting</button></p>
           <p><button id="delete" class="w3-button w3-green">Delete</button></p>
           <p><button id="selectall" class="w3-button w3-green">Select all</button></p>
           <p><button id="findandreplace" class="w3-button w3-green">Find and replace</button></p>
        </div>
     </div><br/>
     <div class="dropdown">
        <p><button id="view" class="w3-button w3-blue">View</button></p>
        <div class="dropdown-content">
           <p><button id="printlayout" class="w3-button w3-green">Print layout</button></p>
           <p><button id="mode" class="w3-button w3-green">Mode</button></p>
           <p><button id="showruler" class="w3-button w3-green">Show ruler</button></p>
           <p><button id="showdocumentoutline" class="w3-button w3-green">Show document outline</button></p>
           <p><button id="showequationtoolbar" class="w3-button w3-green" >Show equation toolbar</button></p>
           <p><button id="showsectionbreaks" class="w3-button w3-green">Show section breaks</button></p>
           <p><button id="fullscreen" class="w3-button w3-green">Full screen</button></p>
        </div>
     </div><br/>
     <div class="dropdown">
        <p><button id="insert" class="w3-button w3-blue">Insert</button></p>
        <div class="dropdown-content">
           <p><button id="image" class="w3-button w3-green">Image</button></p>
           <p><button id="table" class="w3-button w3-green">Table</button></p>
           <p><button id="drawing" class="w3-button w3-green">Drawing</button></p>
           <p><button id="chart" class="w3-button w3-green">Chart</button></p>
           <p><button id="horizontalline" class="w3-button w3-green" >Horizontal line</button></p>
           <p><button id="footnote" class="w3-button w3-green">Footnote</button></p>
           <p><button id="specialcharacters" class="w3-button w3-green">Special characters</button></p>
           <p><button id="equation" class="w3-button w3-green">Equation</button></p>
           <p><button id="headersandfooters" class="w3-button w3-green">Headers & footers</button></p>
           <p><button id="pagenumbers" class="w3-button w3-green">Page numbers</button></p>
           <p><button id="break" class="w3-button w3-green">Break</button></p>
           <p><button id="link" class="w3-button w3-green">Link</button></p>
           <p><button id="comment" class="w3-button w3-green">comment</button></p>
           <p><button id="bookmark" class="w3-button w3-green">Bookmark</button></p>
           <p><button id="tableofcontents" class="w3-button w3-green">Table of contents</button></p>
        </div>
     </div><br/>
     <div class="dropdown">
        <p><button id="format" class="w3-button w3-blue">Format</button></p>
        <div class="dropdown-content">
           <p><button id="text" class="w3-button w3-green">Text</button></p>
           <p><button id="paragraphstyles" class="w3-button w3-green">Paragraph styles</button></p>
           <p><button id="alignandindent" class="w3-button w3-green">Align & indent</button></p>
           <p><button id="linespacing" class="w3-button w3-green">Line spacing</button></p>
           <p><button id="columns" class="w3-button w3-green" >Columns</button></p>
           <p><button id="bulletsandnumbering" class="w3-button w3-green">Bullets & numbering</button></p>
           <p><button id="headersandfootersformat" class="w3-button w3-green">Headers & footers</button></p>
           <p><button id="pagenumbersformat" class="w3-button w3-green">Page numbers</button></p>
           <p><button id="tableformat" class="w3-button w3-green">Table</button></p>
           <p><button id="imageformat" class="w3-button w3-green">Image</button></p>
           <p><button id="clearformattingformat" class="w3-button w3-green">Clear formatting</button></p>
           <p><button id="bordersandlines" class="w3-button w3-green">Borders & lines</button></p>
        </div>
     </div><br/>
     <div class="dropdown">
        <p><button id="tools" class="w3-button w3-blue">Tools</button></p>
        <div class="dropdown-content">
           <p><button id="spellingandgrammar" class="w3-button w3-green">Spelling and grammar</button></p>
           <p><button id="wordcount" class="w3-button w3-green">Word count</button></p>
           <p><button id="reviewsuggestededits" class="w3-button w3-green">Review suggested edits</button></p>
           <p><button id="comparedocuments" class="w3-button w3-green">Compare documents</button></p>
           <p><button id="citations" class="w3-button w3-green" >Citations</button></p>
           <p><button id="explore" class="w3-button w3-green">Explore</button></p>
           <p><button id="linkedobjects" class="w3-button w3-green">Linked objects</button></p>
           <p><button id="dictionary" class="w3-button w3-green">Dictionary</button></p>
           <p><button id="translatedocument" class="w3-button w3-green">Translate document</button></p>
           <p><button id="voicetyping" class="w3-button w3-green">Voice typing</button></p>
           <p><button id="scripteditor" class="w3-button w3-green">Script editor</button></p>
           <p><button id="preferences" class="w3-button w3-green">Preferences</button></p>
           <p><button id="accessibilitysettings" class="w3-button w3-green">Accessibility settings</button></p>
        </div>
     </div><br/>
     <div class="dropdown">
        <p><button id="addons" class="w3-button w3-blue">Add-ons</button></p>
        <div class="dropdown-content">
           <p><button id="documentaddons" class="w3-button w3-green">Document add-ons</button></p>
           <p><button id="getaddons" class="w3-button w3-green">Get add-ons</button></p>
           <p><button id="manageaddons" class="w3-button w3-green">Manage add-ons</button></p>
        </div>
     </div><br/>
     <div class="dropdown">
        <p><button id="help" class="w3-button w3-blue">Help</button></p>
        <div class="dropdown-content">
           <p><button id="docshelp" class="w3-button w3-green">Docs help</button></p>
           <p><button id="training" class="w3-button w3-green">Training</button></p>
           <p><button id="updates" class="w3-button w3-green">Updates</button></p>
           <p><button id="helpdocsimprove" class="w3-button w3-green">Help docs improve</button></p>
           <p><button id="reportabusecopyright" class="w3-button w3-green" >Report abuse/copyright</button></p>
           <p><button id="privacypolicy" class="w3-button w3-green">Privacy policy</button></p>
           <p><button id="termsofservice" class="w3-button w3-green">Terms of service</button></p>
           <p><button id="keyboardshortcuts" class="w3-button w3-green">Keyboard shortcuts</button></p>
        </div>
     </div><br/>
     <div class="dropdown">
        <p><button id="accessibility" class="w3-button w3-blue">Accessibility</button></p>
        <div class="dropdown-content">
           <p><button id="speak" class="w3-button w3-green">Speak</button></p>
           <p><button id="comments" class="w3-button w3-green">Comments</button></p>
           <p><button id="footnoteaccess" class="w3-button w3-green">Footnote</button></p>
           <p><button id="headings" class="w3-button w3-green">Headings</button></p>
           <p><button id="graphics" class="w3-button w3-green" >Graphics</button></p>
           <p><button id="listaccess" class="w3-button w3-green">List</button></p>
           <p><button id="linkaccess" class="w3-button w3-green">Link</button></p>
           <p><button id="tableaccess" class="w3-button w3-green">Table</button></p>
           <p><button id="sectionaccess" class="w3-button w3-green">Section</button></p>
           <p><button id="misspelling" class="w3-button w3-green">Misspelling</button></p>
           <p><button id="formattingaccess" class="w3-button w3-green">Formatting</button></p>
           <p><button id="showliveedits" class="w3-button w3-green">Show live edits</button></p>
        </div>
     </div><br/>
  <div id="ToolBar" class="tab-content">
     <p><button id="undo" class="w3-button w3-blue">Undo</button></p>
     <p><button id="redo" class="w3-button w3-blue">Redo</button></p>
     <p><button id="print" class="w3-button w3-blue">Print</button></p>
     <p><button id="spellingandgrammarcheck" class="w3-button w3-blue">SpellingAndGrammarCheck</button></p>
     <p><button id="paintformat" class="w3-button w3-blue">PaintFormat</button></p>
     <div class="dropdown">
        <p><button id="zoom" class="w3-button w3-blue">Zoom</button></p>
        <div class="dropdown-content">
           <p><button id="fit" class="w3-button w3-green">Fit</button></p>
           <p><button id="50" class="w3-button w3-green">50%</button></p>
           <p><button id="75" class="w3-button w3-green">75%</button></p>
           <p><button id="90" class="w3-button w3-green">90%</button></p>
           <p><button id="100" class="w3-button w3-green" >100%</button></p>
           <p><button id="125" class="w3-button w3-green">125%</button></p>
           <p><button id="150" class="w3-button w3-green">150%</button></p>
        </div>
     </div><br/>
     <div class="dropdown">
        <p><button id="styles" class="w3-button w3-blue">Styles</button></p>
        <div class="dropdown-content">
           <p><button id="normal" class="w3-button w3-green">Normal text</button></p>
           <p><button id="title" class="w3-button w3-green">Title</button></p>
           <p><button id="subtitle" class="w3-button w3-green">Subtitle</button></p>
           <p><button id="heading1" class="w3-button w3-green">Heading 1</button></p>
           <p><button id="heading2" class="w3-button w3-green">Heading 2</button></p>
           <p><button id="heading3" class="w3-button w3-green">Heading 3</button></p>
        </div>
     </div><br/>
     <div class="dropdown">
        <p><button id="font" class="w3-button w3-blue">Font</button></p>
        <div class="dropdown-content">
           <p><button id="amaticsc" class="w3-button w3-green">amaticsc</button></p>
           <p><button id="arial" class="w3-button w3-green">arial</button></p>
           <p><button id="caveat" class="w3-button w3-green">caveat</button></p>
           <p><button id="comfortaa" class="w3-button w3-green">comfortaa</button></p>
           <p><button id="comicsansms" class="w3-button w3-green">comicsansms</button></p>
           <p><button id="couriernew" class="w3-button w3-green">couriernew</button></p>
           <p><button id="ebgaramond" class="w3-button w3-green">ebgaramond</button></p>
           <p><button id="georgia" class="w3-button w3-green">georgia</button></p>
           <p><button id="impact" class="w3-button w3-green">impact</button></p>
           <p><button id="lobster" class="w3-button w3-green">lobster</button></p>
           <p><button id="lora" class="w3-button w3-green">lora</button></p>
           <p><button id="merriweather" class="w3-button w3-green">merriweather</button></p>
           <p><button id="montserrat" class="w3-button w3-green">montserrat</button></p>
           <p><button id="nunito" class="w3-button w3-green">nunito</button></p>
           <p><button id="oswald" class="w3-button w3-green">oswald</button></p>
           <p><button id="pacifico" class="w3-button w3-green">pacifico</button></p>
           <p><button id="playfairdisplay" class="w3-button w3-green">playfairdisplay</button></p>
           <p><button id="roboto" class="w3-button w3-green">roboto</button></p>
           <p><button id="robotomono" class="w3-button w3-green">robotomono</button></p>
           <p><button id="spectral" class="w3-button w3-green">spectral</button></p>
           <p><button id="timesnewroman" class="w3-button w3-green">timesnewroman</button></p>
           <p><button id="trebuchetms" class="w3-button w3-green">trebuchetms</button></p>
           <p><button id="verdana" class="w3-button w3-green">verdana</button></p>
        </div>
     </div><br/>
     <p><button id="fontsizedecrement" class="w3-button w3-blue">FontSizeDecrement</button></p>
     <div class="dropdown">
        <p><button id="fontsize" class="w3-button w3-blue">FontSize</button></p>
        <div class="dropdown-content">
           <p><button id="12" class="w3-button w3-green">12</button></p>
           <p><button id="14" class="w3-button w3-green">14</button></p>
           <p><button id="16" class="w3-button w3-green">16</button></p>
           <p><button id="18" class="w3-button w3-green">18</button></p>
           <p><button id="20" class="w3-button w3-green">20</button></p>
           <p><button id="22" class="w3-button w3-green">22</button></p>
           <p><button id="24" class="w3-button w3-green">24</button></p>
        </div>
     </div>
     <p><button id="fontsizeincrement" class="w3-button w3-blue">FontSizeIncrement</button></p>
     <p><button id="bold" class="w3-button w3-blue">Bold</button></p>
     <p><button id="italics" class="w3-button w3-blue">Italics</button></p>
     <p><button id="underline" class="w3-button w3-blue">Underline</button></p>
     <div class="dropdown">
        <p><button id="textcolor" class="w3-button w3-blue">TextColor</button></p>
        <div class="dropdown-content">
           <p>
              <button id="black" style="margin:5px; background-color:#000000;"/>
           </p>
           <p><button id="darkgray4" style="margin:5px; background-color:#434343;"/></p>
           <p><button id="darkgray3" style="margin:5px; background-color:#666666;"/></p>
           <p><button id="darkgray2" style="margin:5px; background-color:#999999;"/></p>
           <p><button id="darkgray1" style="margin:5px; background-color:#b7b7b7;"/></p>
           <p><button id="grey" style="margin:5px; background-color:#cccccc;"/></p>
           <p><button id="lightgrey1" style="margin:5px; background-color:#d9d9d9;"/></p>
           <p><button id="lightgrey2" style="margin:5px; background-color:#efefef;"/></p>
           <p><button id="lightgrey3" style="margin:5px; background-color:#f3f3f3;"/></p>
           <p><button id="white" style="margin:5px; background-color:#ffffff;"/></p>
           <p><button id="redberry" style="margin:5px; background-color:#980000;"/></p>
           <p><button id="red" style="margin:5px; background-color:#ff0000;"/></p>
           <p><button id="orange" style="margin:5px; background-color:#ff9900;"/></p>
           <p><button id="yellow" style="margin:5px; background-color:#ffff00;"/></p>
           <p><button id="green" style="margin:5px; background-color:#00ff00;"/></p>
           <p><button id="cyan" style="margin:5px; background-color:#00ffff;"/></p>
           <p><button id="cornflowerblue" style="margin:5px; background-color:#4a86e8;"/></p>
           <p><button id="blue" style="margin:5px; background-color:#0000ff;"/></p>
           <p><button id="purple" style="margin:5px; background-color:#9900ff;"/></p>
           <p><button id="magenta" style="margin:5px; background-color:#ff00ff;"/></p>
           <p><button id="lightredberry3" style="margin:5px; background-color:#e6b8af;"/></p>
           <p><button id="lightred3" style="margin:5px; background-color:#f4cccc;"/></p>
           <p><button id="lightorange3" style="margin:5px; background-color:#fce5cd;"/></p>
           <p><button id="lightyellow3" style="margin:5px; background-color:#fff2cc;"/></p>
           <p><button id="lightgreen3" style="margin:5px; background-color:#d9ead3;"/></p>
           <p><button id="lightcyan3" style="margin:5px; background-color:#d0e0e3;"/></p>
           <p><button id="lightcornflowerblue3" style="margin:5px; background-color:#c9daf8;"/></p>
           <p><button id="lightblue3" style="margin:5px; background-color:#cfe2f3;"/></p>
           <p><button id="lightpurple3" style="margin:5px; background-color:#d9d2e9;"/></p>
           <p><button id="lightmagenta3" style="margin:5px; background-color:#ead1dc;"/></p>
           <p><button id="lightredberry2" style="margin:5px; background-color:#dd7e6b;"/></p>
           <p><button id="lightred2" style="margin:5px; background-color:#ea9999;"/></p>
           <p><button id="lightorange2" style="margin:5px; background-color:#f9cb9c;"/></p>
           <p><button id="lightyellow2" style="margin:5px; background-color:#ffe599;"/></p>
           <p><button id="lightgreen2" style="margin:5px; background-color:#b6d7a8;"/></p>
           <p><button id="lightcyan2" style="margin:5px; background-color:#a2c4c9;"/></p>
           <p><button id="lightcornflowerblue2" style="margin:5px; background-color:#a4c2f4;"/></p>
           <p><button id="lightblue2" style="margin:5px; background-color:#9fc5e8;"/></p>
           <p><button id="lightpurple2" style="margin:5px; background-color:#b4a7d6;"/></p>
           <p><button id="lightmagenta2" style="margin:5px; background-color:#d5a6bd;"/></p>
           <p><button id="lightredberry1" style="margin:5px; background-color:#cc4125;"/></p>
           <p><button id="lightred1" style="margin:5px; background-color:#e06666;"/></p>
           <p><button id="lightorange1" style="margin:5px; background-color:#f6b26b;"/></p>
           <p><button id="lightyellow1" style="margin:5px; background-color:#ffd966;"/></p>
           <p><button id="lightgreen1" style="margin:5px; background-color:#93c47d;"/></p>
           <p><button id="lightcyan1" style="margin:5px; background-color:#76a5af;"/></p>
           <p><button id="lightcornflowerblue1" style="margin:5px; background-color:#6d9eeb;"/></p>
           <p><button id="lightblue1" style="margin:5px; background-color:#6fa8dc;"/></p>
           <p><button id="lightpurple1" style="margin:5px; background-color:#8e7cc3;"/></p>
           <p><button id="lightmagenta1" style="margin:5px; background-color:#c27ba0;"/></p>
           <p><button id="darkredberry1" style="margin:5px; background-color:#a61c00;"/></p>
           <p><button id="darkred1" style="margin:5px; background-color:#cc0000;"/></p>
           <p><button id="darkorange1" style="margin:5px; background-color:#e69138;"/></p>
           <p><button id="darkyellow1" style="margin:5px; background-color:#f1c232;"/></p>
           <p><button id="darkgreen1" style="margin:5px; background-color:#6aa84f;"/></p>
           <p><button id="darkcyan1" style="margin:5px; background-color:#45818e;"/></p>
           <p><button id="darkcornflowerblue1" style="margin:5px; background-color:#3c78d8;"/></p>
           <p><button id="darkblue1" style="margin:5px; background-color:#3d85c6;"/></p>
           <p><button id="darkpurple1" style="margin:5px; background-color:#674ea7;"/></p>
           <p><button id="darkmagenta1" style="margin:5px; background-color:#a64d79;"/></p>
           <p><button id="darkredberry2" style="margin:5px; background-color:#85200c;"/></p>
           <p><button id="darkred2" style="margin:5px; background-color:#990000;"/></p>
           <p><button id="darkorange2" style="margin:5px; background-color:#b45f06;"/></p>
           <p><button id="darkyellow2" style="margin:5px; background-color:#bf9000;"/></p>
           <p><button id="darkgreen2" style="margin:5px; background-color:#38761d;"/></p>
           <p><button id="darkcyan2" style="margin:5px; background-color:#134f5c;"/></p>
           <p><button id="darkcornflowerblue2" style="margin:5px; background-color:#1155cc;"/></p>
           <p><button id="darkblue2" style="margin:5px; background-color:#0b5394;"/></p>
           <p><button id="darkpurple2" style="margin:5px; background-color:#351c75;"/></p>
           <p><button id="darkmagenta2" style="margin:5px; background-color:#741b47;"/></p>
           <p><button id="darkredberry3" style="margin:5px; background-color:#5b0f00;"/></p>
           <p><button id="darkred3" style="margin:5px; background-color:#660000;"/></p>
           <p><button id="darkorange3" style="margin:5px; background-color:#783f04;"/></p>
           <p><button id="darkyellow3" style="margin:5px; background-color:#7f6000;"/></p>
           <p><button id="darkgreen3" style="margin:5px; background-color:#274e13;"/></p>
           <p><button id="darkcyan3" style="margin:5px; background-color:#0c343d;"/></p>
           <p><button id="darkcornflowerblue3" style="margin:5px; background-color:#1c4587;"/></p>
           <p><button id="darkblue3" style="margin:5px; background-color:#073763;"/></p>
           <p><button id="darkpurple3" style="margin:5px; background-color:#20124d;"/></p>
           <p><button id="darkmagenta3" style="margin:5px; background-color:#4c1130;"/></p>
        </div>
     </div><br/>
     <div class="dropdown">
     <p><button id="bgcolor" class="w3-button w3-blue">BgColor</button></p>
     <div class="dropdown-content">
     <p><button id="tblack" style="margin:5px; background-color:#000000;"/></p>
     <p><button id="tdarkgray4" style="margin:5px; background-color:#434343;"/></p>
     <p><button id="tdarkgray3" style="margin:5px; background-color:#666666;"/></p>
     <p><button id="tdarkgray2" style="margin:5px; background-color:#999999;"/></p>
     <p><button id="tdarkgray1" style="margin:5px; background-color:#b7b7b7;"/></p>
     <p><button id="tgrey" style="margin:5px; background-color:#cccccc;"/></p>
     <p><button id="tlightgrey1" style="margin:5px; background-color:#d9d9d9;"/></p>
     <p><button id="tlightgrey2" style="margin:5px; background-color:#efefef;"/></p>
     <p><button id="tlightgrey3" style="margin:5px; background-color:#f3f3f3;"/></p>
     <p><button id="twhite" style="margin:5px; background-color:#ffffff;"/></p>
     <p><button id="tredberry" style="margin:5px; background-color:#980000;"/></p>
     <p><button id="tred" style="margin:5px; background-color:#ff0000;"/></p>
     <p><button id="torange" style="margin:5px; background-color:#ff9900;"/></p>
     <p><button id="tyellow" style="margin:5px; background-color:#ffff00;"/></p>
     <p><button id="tgreen" style="margin:5px; background-color:#00ff00;"/></p>
     <p><button id="tcyan" style="margin:5px; background-color:#00ffff;"/></p>
     <p><button id="tcornflowerblue" style="margin:5px; background-color:#4a86e8;"/></p>
     <p><button id="tblue" style="margin:5px; background-color:#0000ff;"/></p>
     <p><button id="tpurple" style="margin:5px; background-color:#9900ff;"/></p>
     <p><button id="tmagenta" style="margin:5px; background-color:#ff00ff;"/></p>
     <p><button id="tlightredberry3" style="margin:5px; background-color:#e6b8af;"/></p>
     <p><button id="tlightred3" style="margin:5px; background-color:#f4cccc;"/></p>
     <p><button id="tlightorange3" style="margin:5px; background-color:#fce5cd;"/></p>
     <p><button id="tlightyellow3" style="margin:5px; background-color:#fff2cc;"/></p>
     <p><button id="tlightgreen3" style="margin:5px; background-color:#d9ead3;"/></p>
     <p><button id="tlightcyan3" style="margin:5px; background-color:#d0e0e3;"/></p>
     <p><button id="tlightcornflowerblue3" style="margin:5px; background-color:#c9daf8;"/></p>
     <p><button id="tlightblue3" style="margin:5px; background-color:#cfe2f3;"/></p>
     <p><button id="tlightpurple3" style="margin:5px; background-color:#d9d2e9;"/></p>
     <p><button id="tlightmagenta3" style="margin:5px; background-color:#ead1dc;"/></p>
     <p><button id="tlightredberry2" style="margin:5px; background-color:#dd7e6b;"/></p>
     <p><button id="tlightred2" style="margin:5px; background-color:#ea9999;"/></p>
     <p><button id="tlightorange2" style="margin:5px; background-color:#f9cb9c;"/></p>
     <p><button id="tlightyellow2" style="margin:5px; background-color:#ffe599;"/></p>
     <p><button id="tlightgreen2" style="margin:5px; background-color:#b6d7a8;"/></p>
     <p><button id="tlightcyan2" style="margin:5px; background-color:#a2c4c9;"/></p>
     <p><button id="tlightcornflowerblue2" style="margin:5px; background-color:#a4c2f4;"/></p>
     <p><button id="tlightblue2" style="margin:5px; background-color:#9fc5e8;"/></p>
     <p><button id="tlightpurple2" style="margin:5px; background-color:#b4a7d6;"/></p>
     <p><button id="tlightmagenta2" style="margin:5px; background-color:#d5a6bd;"/></p>
     <p><button id="tlightredberry1" style="margin:5px; background-color:#cc4125;"/></p>
     <p><button id="tlightred1" style="margin:5px; background-color:#e06666;"/></p>
     <p><button id="tlightorange1" style="margin:5px; background-color:#f6b26b;"/></p>
     <p><button id="tlightyellow1" style="margin:5px; background-color:#ffd966;"/></p>
     <p><button id="tlightgreen1" style="margin:5px; background-color:#93c47d;"/></p>
     <p><button id="tlightcyan1" style="margin:5px; background-color:#76a5af;"/></p>
     <p><button id="tlightcornflowerblue1" style="margin:5px; background-color:#6d9eeb;"/></p>
     <p><button id="tlightblue1" style="margin:5px; background-color:#6fa8dc;"/></p>
     <p><button id="tlightpurple1" style="margin:5px; background-color:#8e7cc3;"/></p>
     <p><button id="tlightmagenta1" style="margin:5px; background-color:#c27ba0;"/></p>
     <p><button id="tdarkredberry1" style="margin:5px; background-color:#a61c00;"/></p>
     <p><button id="tdarkred1" style="margin:5px; background-color:#cc0000;"/></p>
     <p><button id="tdarkorange1" style="margin:5px; background-color:#e69138;"/></p>
     <p><button id="tdarkyellow1" style="margin:5px; background-color:#f1c232;"/></p>
     <p><button id="tdarkgreen1" style="margin:5px; background-color:#6aa84f;"/></p>
     <p><button id="tdarkcyan1" style="margin:5px; background-color:#45818e;"/></p>
     <p><button id="tdarkcornflowerblue1" style="margin:5px; background-color:#3c78d8;"/></p>
     <p><button id="tdarkblue1" style="margin:5px; background-color:#3d85c6;"/></p>
     <p><button id="tdarkpurple1" style="margin:5px; background-color:#674ea7;"/></p>
     <p><button id="tdarkmagenta1" style="margin:5px; background-color:#a64d79;"/></p>
     <p><button id="tdarkredberry2" style="margin:5px; background-color:#85200c;"/></p>
     <p><button id="tdarkred2" style="margin:5px; background-color:#990000;"/></p>
     <p><button id="tdarkorange2" style="margin:5px; background-color:#b45f06;"/></p>
     <p><button id="tdarkyellow2" style="margin:5px; background-color:#bf9000;"/></p>
     <p><button id="tdarkgreen2" style="margin:5px; background-color:#38761d;"/></p>
     <p><button id="tdarkcyan2" style="margin:5px; background-color:#134f5c;"/></p>
     <p><button id="tdarkcornflowerblue2" style="margin:5px; background-color:#1155cc;"/></p>
     <p><button id="tdarkblue2" style="margin:5px; background-color:#0b5394;"/></p>
     <p><button id="tdarkpurple2" style="margin:5px; background-color:#351c75;"/></p>
     <p><button id="tdarkmagenta2" style="margin:5px; background-color:#741b47;"/></p>
     <p><button id="tdarkredberry3" style="margin:5px; background-color:#5b0f00;"/></p>
     <p><button id="tdarkred3" style="margin:5px; background-color:#660000;"/></p>
     <p><button id="tdarkorange3" style="margin:5px; background-color:#783f04;"/></p>
     <p><button id="tdarkyellow3" style="margin:5px; background-color:#7f6000;"/></p>
     <p><button id="tdarkgreen3" style="margin:5px; background-color:#274e13;"/></p>
     <p><button id="tdarkcyan3" style="margin:5px; background-color:#0c343d;"/></p>
     <p><button id="tdarkcornflowerblue3" style="margin:5px; background-color:#1c4587;"/></p>
     <p><button id="tdarkblue3" style="margin:5px; background-color:#073763;"/></p>
     <p><button id="tdarkpurple3" style="margin:5px; background-color:#20124d;"/></p>
     <p><button id="tdarkmagenta3" style="margin:5px; background-color:#4c1130;"/></p>
     </div>
     </div>
     <p><button id="insertlink" class="w3-button w3-blue">InsertLink</button></p>
     <p><button id="addcomment" class="w3-button w3-blue">AddComment</button></p>
     <div class="dropdown">
        <p><button id="insertimage" class="w3-button w3-blue">InsertImage</button></p>
        <div class="dropdown-content">
           <p><button id="uploadfromcomputer" class="w3-button w3-green">Upload from Computer</button></p>
           <p><button id="searchtheweb" class="w3-button w3-green">Search the Web</button></p>
           <p><button id="drive" class="w3-button w3-green">Drive</button></p>
           <p><button id="photos" class="w3-button w3-green">Photos</button></p>
           <p><button id="byurl" class="w3-button w3-green" >By URL</button></p>
           <p><button id="camera" class="w3-button w3-green">Camera</button></p>
        </div>
     </div>
     <p><button id="leftalign" class="w3-button w3-blue">Left Align</button></p>
     <p><button id="centeralign" class="w3-button w3-blue">Center Align</button></p>
     <p><button id="rightalign" class="w3-button w3-blue">Right Align</button></p>
     <p><button id="justify" class="w3-button w3-blue">Justify</button></p>
     <p><button id="linespacing" class="w3-button w3-blue">LineSpacing</button></p>
     <p><button id="numberedlist" class="w3-button w3-blue">NumberedList</button></p>
     <p><button id="bulletedlist" class="w3-button w3-blue">BulletedList</button></p>
     <p><button id="decreaseindent" class="w3-button w3-blue">DecreaseIndent</button></p>
     <p><button id="increaseindent" class="w3-button w3-blue">IncreaseIndent</button></p>
     <p><button id="clearformatting" class="w3-button w3-blue">ClearFormatting</button></p>
  </div>
</body>
<script src="popup.js"></script>
        `;
        

        // const div = document.createElement('div');
        // div.classList.add('form-field');
        // const form = document.createElement('form');
        // form.classList.add('form');
        // const input = document.createElement('input');
        // input.setAttribute('id', 'addTag');
        // input.setAttribute('type', 'text');
        // input.setAttribute('autocomplete', 'off');
        // input.setAttribute('placeholder', 'Add Tag');
        
        // form.appendChild(input);
        // div.appendChild(form)
        // modalContent.appendChild(div);

        const tagBtn = document.createElement('div');
        tagBtn.setAttribute('id', 'tagBtn');
        tagBtn.innerText = '';
        tagBtn.style.cssText = `
            background-color: #EAEAEA;
        `;
        
        modalContent.appendChild(tagBtn);
        modal.appendChild(modalContent)

        return modal;
    }
    //#endregion

    //#region Close Modal Static Method
    static closeMenu() {
        let body = document.querySelector('body');
        body.firstChild.remove();
    }

    //#endregion

    //#region Add Tag To Menu Static Method
    static addTag(e, tag) {

        // Get rid of trailing white space
        tag = tag.replace(/\s*$/,"").toLowerCase();

        // create tag div
        let chip = document.createElement('div');
        chip.className = 'chip';
        chip.innerHTML = `${tag}<span class="closebtn";>&times;</span>`;
        
        // verify tag doesn't already exit TODO: instead of removing the chip, only add it if does not exists
        document.querySelectorAll('.chip').forEach(function(t) {
            if(t.textContent === (tag + '??')) {
                t.remove();
            }
        });
        
        // verify input field has content
        if(tag != '') {

            // append div to menu
            return chip;
        }
    }
    //#endregion

}