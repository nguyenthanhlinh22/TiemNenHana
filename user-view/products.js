export function userProductHTML() {
  return `
  <!-- NAVIGATION -->
<nav
  class="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm"
>
  <div class="container">
    <a class="navbar-brand" href="/view"
      ><i class="fa-solid fa-shop me-2"></i> <strong>Hana Shop</strong></a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
      <div class="input-group">
        <span class="border-primary input-group-text bg-primary text-white"
          ><i class="fa-solid fa-magnifying-glass"></i
        ></span>
        <input title="search" type="text" class="form-control border-primary" />
        <button class="btn btn-primary text-white">Search</button>
      </div>
    </div>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <div class="ms-auto d-none d-lg-block">
        <div class="input-group">
          <span class="border-primary input-group-text bg-primary text-white"
            ><i class="fa-solid fa-magnifying-glass"></i
          ></span>
          <input 
            title="search-btn"
            type="text"
            class="form-control border-primary"
            style="color: #7a7a7a"
          />
          <button class="btn btn-primary text-white">Search</button>
        </div>
      </div>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" aria-current="page" href="#"
            >Offers</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="/view-products">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="">Catalog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="#">About</a>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="/cart"
            ><i class="fa-solid fa-cart-shopping me-1 rung"></i> Cart</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="/admin"
            ><i class="fa-solid fa-circle-user me-1"></i> Admin</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>
  

<div class="nav-item dropdown d-flex w-25 my-4 fs-6">

<a class="nav-link dropdown-toggle fs-6" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Thể Loại
</a>

<ul class="dropdown-menu text-decoration-none" aria-labelledby="navbarDropdownMenuLink">
</ul>
<a class="dropdown-item  fs-6 ms-1" href="#" id="">All products</a>
</div>

<div class="main-content px-5">
   <div class="products-content d-flex mx-1 flex-wrap">
   
   </div>
</div>



<div id="footer">
<div class="footer_content">
    <div class="footer_title">
        <a href="#"><h1>Contact Us</h1></a>
    </div>
    
    <div class="footer_dress">
        <h3>Tiệm Nến Đà Nẵng </h3>
        <p class="drs">
          <b>Địa chỉ </b>: Nguyễn Huy Tưởng ,Hòa Khánh Nam Liên Chiêu ,Đà Nẵng
        </p>
        <p class="drs">
           <b> Hotline Shop</b>:0813979994
        </p>
        <p class="drs">
            <b>Hotline Tư Vấn & CSKH</b>: 081397994
        </p>
        <p class="drs">
            0813979994 (Mr.Thành Linh )
        </p>
        <p class="drs">
            <b>Email</b> : tiemanh2004@gmail.com
        </p>
        <div class="footer_icon">
            <a href="https://www.facebook.com/2004cute22/"><i class="fa-brands fa-facebook" style="color: #0552d6;"></i></a>
            <a href="https://www.tiktok.com/@tiemanh2004"><i class="fa-brands fa-tiktok" style="color: #000000;"></i></a>
            <a href="https://www.instagram.com/tiemanh2004/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/nguyenthanhlinh22"><i class="fa-brands fa-github"></i></a>

        </div>
        <div class="footer_since">
            <p>Copyright © 2023 tiemNenHana</p>
        </div>
        
    </div>
   
    
    <div class="footer_right">
        <div class="footer_map">
            <h3> <b>Map </b></h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4936.89126664547!2d108.40849615482787!3d15.554763292240613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1699035656878!5m2!1svi!2s"  style="border:0; width: 600px ; height: 200px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">ad</iframe>
        </div>
        <div class="footer_logo">
          
        </div>
        

    </div>
</div>

</footer>
`;
}
