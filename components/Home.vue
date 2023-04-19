<template>
    <div class="">
    <div class="container">
      <div class="canliVideoWrapper">
        <div class="canliVideo">
          <div style="position: relative; padding-bottom: 56.25%; overflow: hidden; width: 100%;">
              <iframe id="youtube" style="position: absolute;" width="100%" height="100%" src="https://www.youtube.com/embed/v-enQmYBAME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div class="macIzle">
        <h1 class="macIzleTitle">CANLI YAYIN LİNKLERİ</h1>
        <div class="mb-4 canlilink canlilink1">
          <a href="https://canliyayin.linehaber.com.tr/" target="_blank">CANLI YAYIN</a>
       
        </div>
      </div>
      <div class="canliLinkler">
        <div class="canlilink canlilink1">
          <a href="https://canliyayin1.linehaber.com.tr/" target="_blank">CANLI YAYIN 1</a>
       
        </div>

        <div class="canlilink canlilink2">
          <a href="https://canliyayin2.linehaber.com.tr/" target="_blank">CANLI YAYIN 2</a>

        </div>

        <div class="canlilink canlilink3">
          <a href="https://canliyayin3.linehaber.com.tr/" target="_blank">CANLI YAYIN 3</a>
        </div>

        <div class="canlilink canlilink4">
          <a href="https://canliyayin4.linehaber.com.tr/" target="_blank">CANLI YAYIN 4</a>
        </div>

        <div class="canlilink canlilink5">
          <a href="https://canliyayin5.linehaber.com.tr/" target="_blank">CANLI YAYIN 5</a>
        </div>
      </div>
      <div class="liveButtonWrapper">
        <a href="https://www.linehaber.com.tr/anasayfa/" target="_blank" >
          <img src="https://linehaber.com.tr/wp-content/uploads/2022/09/Linehaber_Logo.png" alt="">
        </a>
        <!-- <a href="/canli-yayin-720p">
          <img style="width: 50%;" src="/wp-content/uploads/2022/10/780p.png" alt="">
        </a>  
        <a href="/canli-yayin-1080p">
          <img style="width: 50%;" src="/wp-content/uploads/2022/10/1080p.png" alt="">
        </a>             -->
      </div>
    </div>
</div>
</template>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: normal;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

header {
  background-color: #282d48;
}
.canliHeader {
  max-width: 1200px;
  margin: 0 auto;
  height: 60px;
  padding: 15px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.canliLogo {
  margin-bottom: 15px;
}

@media screen and (min-width: 1200px) {
.canliHeader {
  flex-direction: row;
  padding: unset;
  justify-content: start;
  align-items: center;
}
.canliLogo {
  margin-bottom: unset !important;
}
.canliCopyright {
  position: relative;
  left: 26%;
}
}

.canliMac {
  height: 40vh;;
  display: flex;
  justify-content: center;
  align-items: center;
}
.macIzle {
  width: 100%;
  max-width: 100%;
  text-align: center;

}
.macIzleTitle {
  font-size: 36px;;
  color: #f08013;
  font-weight: 600;
}
.canliLinkler {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
}

.canlilink a {
  text-decoration: none;
  color:black;
  font-size: 22px;
  font-weight: 600;
}
.canlilink1,
.canlilink2,
.canlilink3,
.canlilink4 {
    border-style: solid;
    border-width: 0px 1px 0px 0px; /* Sol taraftaki kenarlık genişliğini 0px yaparak resmi kaldırın */
    border-image: url("/img/kucukSerit.png") 13 1 19 0 stretch stretch; /* Sol taraftaki kenarlık dilimini 0 yaparak resmi kaldırın */
    padding: 0 15px;
}
.canlilink5 {
  padding-left: 15px;
}
.footerColumn1-1 {
    border-style: solid;
    border-width: 0px 1px 0px 0px; /* Sol taraftaki kenarlık genişliğini 0px yaparak resmi kaldırın */
    border-image: url("https://linehaber.com.tr/wp-content/uploads/2022/09/Turuncu_Serit.png") 13 1 19 0 stretch stretch; /* Sol taraftaki kenarlık dilimini 0 yaparak resmi kaldırın */
    padding: 0 15px;
}
@media screen and (max-width: 960px) {
  .canliMac {
    flex-direction: column;
    height: auto;
  }
  .canliLinkler {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 3px;
    grid-row-gap: 10px;
  }
  .canlilink1 { grid-area: 1 / 1 / 2 / 3; }
  .canlilink2 { grid-area: 1 / 3 / 2 / 5; }
  .canlilink3 { grid-area: 1 / 5 / 2 / 7; }
  .canlilink4 { grid-area: 2 / 2 / 3 / 4; }
  .canlilink5 { grid-area: 2 / 4 / 3 / 6; }

  .canlilink3 {
    border-style: unset;
  }
.footerColumn1-1  {
    border-style: unset;
  }  
}
.canliVideoWrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem;
}

.liveButtonWrapper {
display: flex;
Justify-content: center;
padding: 20px;
height: 150px;
align-items: center;
}
.liveButtonWrapper img {
  width: 100%;
}

footer {
  background-color: #111111;

}
.footerColumns {
  max-width: 1190px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}    
.footerColumn2 {
  border-style: solid;
  border-width: 5px 1px 0px 1px;
  border-image: url("https://linehaber.com.tr/wp-content/uploads/2022/09/Turuncu_Serit.png") 13 1 19 1 stretch stretch;
}    


@media screen and (max-width: 768px) {
  .canliNokta {
    display: none;
}  
}  
@media screen and (min-width: 768px) {
  footer {
    height: 120px;
}
.footerColumns {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}    
.footerColumn2 {
  width: 68%;
}
}
.footerColumnTitle {
  color: #fff;
  margin: 0;
}

.footerColumnBody {
  color: #f08013;
}

.footerColumn {
  text-align: center;
}


.footerColumnBody  {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>