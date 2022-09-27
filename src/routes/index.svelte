<script>
    import Header from "../components/Header.svelte";
	import {onMount} from 'svelte';

	let slider = true;
	onMount(()=>{
		setInterval(()=>{
			slider = !slider;
		}, 6000)
	})

</script>
    <!-- preloader -->
	<div id="preloader">
		<div id="loading-center">
			<div class="loader loader-five">
				<div class="loader-outter"></div>
				<div class="loader-inner"></div>
			</div>
		</div>
	</div>
	<!-- preloader-end -->


		<!-- Scroll-top -->
        <button class="scroll-top scroll-to-target special-scroll" data-target="html">
            <i class="fas fa-angle-up"></i>
        </button>
        <!-- Scroll-top-end-->


		 <!-- header-area -->
		<Header/>
        <!-- header-area-end -->
		<main>
			 <!-- banner-area -->
			 <section id="home" class="banner-area special-banner-area">
                <div class="container">
                  {#if slider}
				  <div class="row justify-content-center align-items-center">
					<div class="col-lg-6 col-md-11 order-0 order-lg-2">
						<div class="slider-img wow fadeInRight" data-wow-delay=".4s">
							<img src="assets/img/banner/slider_img.png" alt="">
						</div>
					</div>
					<div class="col-lg-6">
						<div class="banner-content slider-content">
							<h6 class="sub-title wow fadeInUp" data-wow-delay=".2s">Increased Energy With Mixlix</h6>
							<h2 class="wow fadeInUp" data-wow-delay=".4s">Mix Protein Provided Way To Growth</h2>
							<div class="banner-btn">
								<a href="shop.html" class="btn special-btn wow fadeInLeft" data-wow-delay=".6s">Our Shop <i class="fal fa-arrow-right"></i></a>
								<a href="contact.html" class="btn solid-btn wow fadeInRight" data-wow-delay=".6s">Learn More <i class="fal fa-arrow-right"></i></a>
							</div>
						</div>
					</div>
				</div>
				  {:else}
				  <div class="row justify-content-center align-items-center">
					<div class="col-lg-6 col-md-11 order-0 order-lg-2">
						<div class="slider-img wow fadeInRight" data-wow-delay=".4s">
							<img src="assets/img/banner/protein_banner_img.png" alt="">
						</div>
					</div>
					<div class="col-lg-6">
						<div class="banner-content slider-content">
							<h6 class="sub-title wow fadeInUp" data-wow-delay=".2s">Increased Energy With body reset</h6>
							<h2 class="wow fadeInUp" data-wow-delay=".4s">Mix Protein Provided Way To Growth</h2>
							<div class="banner-btn">
								<a href="shop.html" class="btn special-btn wow fadeInLeft" data-wow-delay=".6s">Our Shop <i class="fal fa-arrow-right"></i></a>
								<a href="contact.html" class="btn solid-btn wow fadeInRight" data-wow-delay=".6s">Learn More <i class="fal fa-arrow-right"></i></a>
							</div>
						</div>
					</div>
				</div>
				  {/if}
                </div>
            </section>
            <!-- banner-area-end -->
    <!-- sup-info-area -->
	<section class="sup-info-area">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6">
					<div class="sup-info-img">
						<img src="assets/img/images/sup_info_img.png" alt="">
						<div class="img-shape"></div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="section-title special-title mb-35">
						<h6 class="sub-title">About Supplement</h6>
						<h2 class="title">Why Choose Our Best Product<span>.</span></h2>
					</div>
					<div class="choose-list-wrap">
						<ul>
							<li>
								<div class="icon">
									<i class="flaticon-protein-supplement"></i>
								</div>
								<div class="content">
									<h4>Multi Fruits Flavour</h4>
									<p>A thing added to something else in order to complete or enhance it.</p>
								</div>
							</li>
							<li>
								<div class="icon">
									<i class="flaticon-supplementary-food"></i>
								</div>
								<div class="content">
									<h4>Flower Formula</h4>
									<p>A thing added to something else in order to complete or enhance it.</p>
								</div>
							</li>
							<li>
								<div class="icon">
									<i class="flaticon-vitamins"></i>
								</div>
								<div class="content">
									<h4>Fishbone Diagram</h4>
									<p>A thing added to something else in order to complete or enhance it.</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- sup-info-area-end -->
	
            <!-- features-area -->
            <section id="features" class="features-area special-features-area pt-120 pb-90">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-8">
                            <div class="section-title special-title text-center mb-55">
                                <h6 class="sub-title">Increased Energy With Mixlix</h6>
                                <h2 class="title">Product Features</h2>
                                <p>There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 col-sm-9">
                            <div class="features-item text-center mb-30">
                                <div class="features-count">01</div>
                                <div class="features-icon mb-25">
                                    <img src="assets/img/icon/features_icon01.png" alt="">
                                </div>
                                <div class="features-content">
                                    <h3>Increased Energy</h3>
                                    <p>A dietary supplement is a manufacture product intended to supplement the diet when taken by mouth.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-9">
                            <div class="features-item text-center active mb-30">
                                <div class="features-count">02</div>
                                <div class="features-icon mb-25">
                                    <img src="assets/img/icon/features_icon02.png" alt="">
                                </div>
                                <div class="features-content">
                                    <h3>Health & Well Being</h3>
                                    <p>A dietary supplement is a manufacture product intended to supplement the diet when taken by mouth.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-9">
                            <div class="features-item text-center mb-30">
                                <div class="features-count">03</div>
                                <div class="features-icon mb-25">
                                    <img src="assets/img/icon/features_icon03.png" alt="">
                                </div>
                                <div class="features-content">
                                    <h3>Energy Grow Up</h3>
                                    <p>A dietary supplement is a manufacture product intended to supplement the diet when taken by mouth.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-9">
                            <div class="features-item text-center mb-30">
                                <div class="features-count">04</div>
                                <div class="features-icon mb-25">
                                    <img src="assets/img/icon/features_icon04.png" alt="">
                                </div>
                                <div class="features-content">
                                    <h3>Calorie Build Up</h3>
                                    <p>A dietary supplement is a manufacture product intended to supplement the diet when taken by mouth.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-9">
                            <div class="features-item text-center mb-30">
                                <div class="features-count">05</div>
                                <div class="features-icon mb-25">
                                    <img src="assets/img/icon/features_icon05.png" alt="">
                                </div>
                                <div class="features-content">
                                    <h3>Regular Routine</h3>
                                    <p>A dietary supplement is a manufacture product intended to supplement the diet when taken by mouth.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-9">
                            <div class="features-item text-center mb-30">
                                <div class="features-count">06</div>
                                <div class="features-icon mb-25">
                                    <img src="assets/img/icon/features_icon06.png" alt="">
                                </div>
                                <div class="features-content">
                                    <h3>Diet Towards</h3>
                                    <p>A dietary supplement is a manufacture product intended to supplement the diet when taken by mouth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- features-area-end -->

			 <!-- sup-info-area -->
			 <section id="ingredient" class="sup-info-area special-ingredient-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-8">
                            <div class="section-title special-title text-center mb-55">
                                <h6 class="sub-title">Increased Energy With Mixlix</h6>
                                <h2 class="title">Mixlix Ingredients</h2>
                                <p>There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-6 order-0 order-lg-2">
                            <div class="ingredient-img-wrap">
                                <img src="assets/img/images/powder.png" alt="">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="choose-list-wrap">
                                <ul>
                                    <li>
                                        <div class="icon">
                                            <i class="flaticon-protein-supplement"></i>
                                        </div>
                                        <div class="content">
                                            <h4>Helps you stick to your diet</h4>
                                            <p>A thing added to something else in order to complete or enhance it.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="flaticon-supplementary-food"></i>
                                        </div>
                                        <div class="content">
                                            <h4>Only 3g net carbs in every jar</h4>
                                            <p>A thing added to something else in order to complete or enhance it.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="flaticon-vitamins"></i>
                                        </div>
                                        <div class="content">
                                            <h4>Clean ingredients only</h4>
                                            <p>A thing added to something else in order to complete or enhance it.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="flaticon-vitamins"></i>
                                        </div>
                                        <div class="content">
                                            <h4>ingredients to fuel your body</h4>
                                            <p>A thing added to something else in order to complete or enhance it.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- sup-info-area-end -->
			 <!-- formula-area -->
			 <section class="formula-area pt-90 pb-100">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="formula-img text-center">
                                <img src="assets/img/images/formula.jpg" alt="">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="section-title special-title">
                                <h6 class="sub-title">Formula</h6>
                                <h2 class="title">Why We Chose This Formula<span>.</span></h2>
                                <p>There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages of that available but the majority.</p>
                            </div>
                            <div class="formula-content">
                                <ul>
                                    <li><i class="far fa-check"></i> No artificial sweeteners, dairy, say or corn fiber</li>
                                    <li><i class="far fa-check"></i> 10G of collagen protein from grass-fed cows</li>
                                    <li><i class="far fa-check"></i> Only 3G net carbs or less</li>
                                    <li><i class="far fa-check"></i> Formulated to reduce blood sugar intact</li>
                                    <li><i class="far fa-check"></i> Tastes like dessert without added sugars or sugar alcohols</li>
                                    <li><i class="far fa-check"></i> Organic almond Butter, Sunflower Lecithin</li>
                                    <li><i class="far fa-check"></i> No energy crashes. Collagen Protein, Stevia</li>
                                    <li><i class="far fa-check"></i> 10G of collagen protein from grass-fed cows</li>
                                </ul>
                            </div>
                            <a href="contact.html" class="btn special-btn">Know More <i class="fal fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- formula-area-end -->
		</main>