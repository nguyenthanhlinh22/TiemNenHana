export default async function homepage() {
  return `  <!-- NAV-INFO -->
<div class="superNav border-bottom py-2 bg-light">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
        <select class="me-3 border-0 bg-light">
          <option value="en-us">EN-US</option>
        </select>
        <span
          class="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3"
          ><strong>tiemNenHana@.com</strong></span
        >
        <span class="me-3"
          ><i class="fa-solid fa-phone me-1 text-primary"></i>
          <strong>081397994</strong></span
        >
      </div>
      <div
        class="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end"
      >
        <span class="me-3"
          ><i class="fa-solid fa-truck text-muted me-1"></i
          ><a class="text-muted" href="#">Shipping</a></span
        >
        <span class="me-3"
          ><i class="fa-solid fa-file text-muted me-2"></i
          ><a class="text-muted" href="#">Policy</a></span
        >
      </div>
    </div>
  </div>
</div>
<!-- NAVIGATION -->
<nav
  class="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm"
>
  <div class="container">
    <a class="navbar-brand" href="/homepage"
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
          <a class="nav-link mx-2 text-uppercase" href="/cart">
              <i id="cart-icon" class="fa-solid fa-cart-shopping me-1 rung"></i> Cart
          </a>
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
  <div id="main-container">
    <!-- slide -->




  <h1 class="text-center p-3">Welcome to our store!</h1>
  <div
    id="carouselExampleSlidesOnly"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./images/user-images/sl11.jpg" class="" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="./images/user-images/sl12.jpg" class="" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="./images/user-images/sl13.jpg" class="" alt="..." />
      </div>
    </div>
  </div>
  
  <!-- content -->
    <div id="content">
        <div class="title">
            <h1>Products to Shop</h1>
            <hr>
        </div>
        <div class="describe">
            <p><a href="https://www.facebook.com/2004cute22/">Tiệm Nến hana</a> - Thương hiệu Nến Chất Lượng Tại thị trường Việt Nam Và Trên Thế giới</p>


        </div>
       
        <div class="img">
            <div class="pts1">
                <img src="images/content/content1.jpg" alt="">
            </div>
            <div class="pts1">
            <img src="images/content/ct2.jpg" alt="">
            </div>
            <div class="pts1">
                <img src="images/content/ct3.jpg" alt="">
            </div>
        </div>
   </div>
   <!-- content 2  -->

   <div class="content2">
      
            <div class="content_right">
                <img src="images/content/ct4.jpg" alt="">

            </div>

            <div class="content_left">
                <div class="title">
                    <h1>Tiệm Nến Hana - since 2024 </h1>
                    <p>look good and fell good</p>

                </div>
                <div class="small_content">
                    <p>
                     Chào mừng đến với cửa hàng nến của chúng tôi, nơi bạn có thể khám phá một thế giới đầy màu sắc và hương thơm tinh tế. Tại đây, chúng tôi cung cấp một loạt các loại nến từ các thương hiệu uy tín và sản phẩm tự làm độc đáo, đem lại không gian ấm áp và thư giãn cho ngôi nhà của bạn
                    </p>
                    
               
                </div>
                <div class="footer_content2">
                    ---From TiemNenHana With Love---

                </div>

            </div>
      
      
   </div>

   <!-- content 3 -->
   <div class="content3">
        <div class="title_ct3">
            <h1>Service by TiemNenHana</h1>
        </div>
        <div class="service">
            <div class="product">
                <img src="images/content/ct5.jpg" alt="">
                <h3> Nến Thơm </h3>
                <p> Nến Thơm có thể giúp Làm Thơm Phòng</p>
                
            </div>
            <div class="product">
                <img src="images/content/ct6.jpg" alt="">
                <h3> Nến handmade </h3>
                <p>Mình cũng có thể tự nay làm ra được loại nến mình thích </p>
                
            </div>
            <div class="product">
                <img src="images/content/ct7.jpg" alt="">
                <h3> Đồ Decord</h3>
                    <p> đồ decord có thể giúp bàn học trở nên xinh hơn</p>
                
             </div>
             <div class="product">
             <img src="images/content/ct7.jpg" alt="">
             <h3> Đồ Decord</h3>
                 <p> đồ decord có thể giúp bàn học trở nên xinh hơn</p>
             
            </div>
            <div class="product">
            <img src="images/content/ct7.jpg" alt="">
            <h3> Đồ Decord</h3>
                <p> đồ decord có thể giúp bàn học trở nên xinh hơn</p>
            
         </div>
         <div class="product">
         <img src="images/content/ct7.jpg" alt="">
         <h3> Đồ Decord</h3>
             <p> đồ decord có thể giúp bàn học trở nên xinh hơn</p>
         
      </div>
           
           
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

   </div>
  `;
}
