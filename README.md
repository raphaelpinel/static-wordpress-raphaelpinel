# raphaelpinel.com is now static and open source! 
## Here is the code to inspire you
I have converted my own wordpress harp blog from wordpress to a headless generated static site hosted on netlify with the help of plugins: duplicator, simply static

Under the `/web/` directory you will find my web developer portfolio website, that was already a static website.

## instructions to add a new portfolio project to /web/index.html
- in `/web/index.html` look for `<!-- Portfolio Recent Projects -->`
- duplicate the first project, for example:
`<!-- start of item # 00-120 -->
              <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix react">
                <div class="portfolio-item" >
                  <div class="portfolio-img">
                      <img class="img-fluid" src="/web/img/portfolio/trains1.jpg" alt="React Trains App">
                  </div> 
                  <div class="portfoli-content">
                    <div class="sup-desc-wrap">
                          <a class="portfolio-mod" href="#portfolio-modal-00-110">
                            <div class="sup-title">
                              <h4>React Trains Information App</h4>
                              <i class="fa fa-search-plus fa-3x"></i>
                              <p class="sup-description">Using the API for Finnish trains</p>
                            </div>
                          </a>
                    </div>
                  </div>               
                </div>
              </div>
            <!-- end of item # 00-120 -->`

- increment in the start and end comments the item # by 10:
`<!-- start of item # 00-130 -->`
`<!-- end of item # 00-130 -->`

- also update the number in `<a class="portfolio-mod" href="#portfolio-modal-00-130">`

- create 2 images, the biggest should be **900x541px** and named _<project-name>2.jpg_, the smallest should be **350x282px** and named _<project-name>.jpg_. Save both in `/web/img/portfolio/` directory

- edit`<img class="img-fluid" src="/web/img/portfolio/<project-name>1.jpg" alt="<project-name>">`
- edit `<h4>`, `<p class="sup-description">`

- go to `<!-- Portfolio Modals -->` section and duplicate the first entry between `<!-- Portfolio Modal 00-120 -->` and `<!-- end of Portfolio Modal 00-120 -->`
- update numbers in start and end comment to the same id (by adding 10 to them), for example `00-130`, be sure to also edit the **id** in `<div class="portfolio-modal mfp-hide" id="portfolio-modal-00-130">` in order for the modal to work.
-update title `<h2 class="text-secondary text-uppercase mb-0">Trains Informations App with React</h2>`
- in the same way update deployment link, description, image link, github repository, etc.