<script>
    import HeaderSearch from "./HeaderSearch.svelte";
    import OffCanvas from "./OffCanvas.svelte";

</script>
<header>
    <div id="sticky-header" class="menu-area special-header transparent-header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="mobile-nav-toggler"><i class="flaticon-menu"></i></div>
                    <div class="menu-wrap">
                        <nav class="menu-nav show">
                            <div class="logo">
                                <a href="index.html"><img src="assets/img/logo/special_logo.png" alt="Logo"></a>
                            </div>
                            <div class="navbar-wrap main-menu d-none d-lg-flex">
                                <ul class="navigation text-center" >
                                    <li class="menu-item-has-children active"><a href="/" class="section-link">Home</a>
                                      
                                    </li>
                                    <li><a href="#gallery" class="section-link">Gallery</a></li>
                                   
                                    <li ><a href="/shop">Shop</a>
                                       
                                    </li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                            <div class="header-action d-none d-sm-block">
                                <ul>
                                    <li class="header-shop-cart"><a href="#"><i class="flaticon-shopping-cart"></i><span>2</span></a>
                                        <ul class="minicart">
                                            <li class="d-flex align-items-start">
                                                <div class="cart-img">
                                                    <a href="shop-details.html">
                                                        <img src="assets/img/product/cart_p01.jpg" alt="">
                                                    </a>
                                                </div>
                                                <div class="cart-content">
                                                    <h4>
                                                        <a href="shop-details.html">Liver Health and Detoxification</a>
                                                    </h4>
                                                    <div class="cart-price">
                                                        <span class="new">$229.9</span>
                                                        <span>
                                                            <del>$229.9</del>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="del-icon">
                                                    <a href="#">
                                                        <i class="far fa-trash-alt"></i>
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="d-flex align-items-start">
                                                <div class="cart-img">
                                                    <a href="shop-details.html">
                                                        <img src="assets/img/product/cart_p02.jpg" alt="">
                                                    </a>
                                                </div>
                                                <div class="cart-content">
                                                    <h4>
                                                        <a href="shop-details.html">Branched Chain Amino Acids</a>
                                                    </h4>
                                                    <div class="cart-price">
                                                        <span class="new">$229.9</span>
                                                        <span>
                                                            <del>$229.9</del>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="del-icon">
                                                    <a href="#">
                                                        <i class="far fa-trash-alt"></i>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="total-price">
                                                    <span class="f-left">Total:</span>
                                                    <span class="f-right">$239.9</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="checkout-link">
                                                    <a href="#">Shopping Cart</a>
                                                    <a class="black-bg" href="#">Checkout</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="header-search"><a href="#"><i class="flaticon-search"></i></a></li>
                                    <li class="offcanvas-btn d-none d-lg-block"><a href="#" class="navSidebar-button"><i class="flaticon-menu"></i></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <!-- Mobile Menu  -->
                    <div class="mobile-menu">
                        <nav class="menu-box">
                            <div class="close-btn"><i class="far fa-times"></i></div>
                            <div class="nav-logo"><a href="index.html"><img src="assets/img/logo/w_special_logo.png" alt="" title=""></a></div>
                            <div class="menu-outer">
                                <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                            </div>
                            <div class="social-links">
                                <ul class="clearfix">
                                    <li class="facebook"><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                                    <li class="twitter"><a href="#"><span class="fab fa-twitter"></span></a></li>
                                    <li class="pinterest"><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                                    <li class="instagram"><a href="#"><span class="fab fa-instagram"></span></a></li>
                                    <li class="youtube"><a href="#"><span class="fab fa-youtube"></span></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="menu-backdrop"></div>
                    <!-- End Mobile Menu -->
                </div>
            </div>
        </div>
    </div>

    <!-- header-search -->
<HeaderSearch/>
    <!-- header-search-end -->

    <!-- off-canvas-start -->
<OffCanvas/>
    <!-- off-canvas-end -->

</header>