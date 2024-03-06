export function dashboardHTML() {
  const dashboard = ` <div class="d-flex p-0" id="wrapper">
<!-- Sidebar-->
<div class="border-end bg-dark" id="sidebar-wrapper">
  <div class="sidebar-heading border-bottom bg-dark">ADMIN</div>
  <div class="list-group list-group-flush bg-dark">
    <a
      class="list-group-item list-group-item-action bg-dark p-3"
      href="/admin"
      >Dashboard</a
    >
    <a
      class="list-group-item list-group-item-action list-group-item-light bg-dark p-3"
      href="admin-categories"
      >Categories</a
    >
    <a
      class="list-group-item list-group-item-action list-group-item-light bg-dark p-3"
      href="admin-products"
      >Products</a
    >
    <a
      class="list-group-item list-group-item-action list-group-item-light bg-dark p-3"
      href="admin-orders"
      >Orders</a
    >
    <a
      class="list-group-item list-group-item-action list-group-item-light bg-dark p-3"
      href="admin-order_details"
      >Order Details</a
    >
    <a
      class="list-group-item list-group-item-action list-group-item-light bg-dark p-3"
      href="#!"
      >Status</a
    >
  </div>
</div>
<!-- Page content wrapper-->
<div id="page-content-wrapper">
  <!-- Top navigation-->
  <nav
    class="navbar navbar-expand-lg navbar-light bg-dark border-bottom"
  >
    <div class="container-fluid">
      <button
        type="button"
        title="toogle"
        class="btn btn-primary"
        id="sidebarToggle"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link text-info" href="#!">Hello, <b>admin</b></a>
          </li>
          <li class="nav-item active">
            <img id="admin-img" src="./images/admin.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- content -->
 

  <div id="add"></div>
  <div id="admin-bg" src="" alt=""> <div/>
  <button id="addNewBtn" class="btn btn-primary ms-4 mt-4">ADD</button>
  <div id="app" class="p-3"></div>
</div>
</div>`;
  return dashboard;
}
