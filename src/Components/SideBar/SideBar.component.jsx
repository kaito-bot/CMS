import "./SideBar.css"

function SideBar() {
    return (  
    <div id="viewport">
 
        <div id="sidebar">
          <header>
            <a href="#">My App</a>
          </header>
          <ul class="nav">
            <li>
              <a href="#">
                <i class="zmdi zmdi-view-dashboard"></i> Dashboard
              </a>
            </li>
            <li>
              <a href="#">
                <i class="zmdi zmdi-link"></i> Shortcuts
              </a>
            </li>

          </ul>
        </div>
       
        <div id="content">
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a href="#"><i class="zmdi zmdi-notifications text-danger"></i>
                  </a>
                </li>
                <li><a href="#">Test User</a></li>
              </ul>
            </div>
          </nav>
          <div class="container-fluid">
            <h1>Simple Sidebar</h1>
            <p>
              Make sure to keep all page content within the 
              <code>#content</code>.
            </p>
          </div>
        </div>
      </div> );
}

export default SideBar;