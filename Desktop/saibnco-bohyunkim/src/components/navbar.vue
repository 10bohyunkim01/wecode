<template>
    <div id="navbar">
      <div class="navbar-wrapper">
        <div class="nav-leftside">
          <div class="nav-menu">About</div>
          <div class="nav-menu">Shop</div>
          <div class="nav-menu">Campaign</div>
          <div class="nav-menu">
            Saib-Said
              <img class="text-icon" src="https://i.ibb.co/Nt1W3qM/newtab-icon.png" alt="newtab-logo">
          </div>
        </div>
        <div class="nav-logo">
          <img src="https://i.ibb.co/PtKnKBX/saib-logo.png" alt="saib-logo">
        </div>
        <div class="nav-rightside">
          <div class="nav-menu">FAQ</div>
          <div class="nav-menu">Login</div>
          <div class="nav-menu">
            Cart
            <span class="text-icon">0</span>
          </div>
          <div class="nav-menu">My Page</div>
          <div class="socialmedia-icons">
            <div class="internet-icon">
              <img src="https://i.ibb.co/swrrHHm/internet-icon.png" alt="internet-icon">
            </div>
            <div class="instagram-icon">
              <img src="https://i.ibb.co/ZJPBKmK/instagram-icon.png" alt="instagram-icon">
            </div>
            <div class="fb-icon">
              <img src="https://i.ibb.co/WzdRc5t/fb-icon.png" alt="fb-icon">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "navbar",
}
</script>

<style lang="scss">
@import "../styles/common.scss";

  #navbar {
    position: fixed;
    top: 0;
    height: 120px; 
    width: 100%;
    background-color: $default-pink;
    z-index: 9999;

    .navbar-wrapper {
    @include flex-center;
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    text-transform: uppercase;
    color: $default-text;

      .nav-leftside {
      @include flex-center;
      vertical-align: top;

      .nav-menu {
      @include flex-center;

          img { 
          width: 14px;
          background-size: 14px;
          margin-left: 6px;
          }
      }

      }
      .nav-logo {
        height: 54px;
        margin: 0px 40px;
        vertical-align: top;

        img {
          height: 100%;
        }
      }

      .nav-rightside {
      @include flex-center;
      vertical-align: top;


        .socialmedia-icons {
          display: flex; 
          
          div {
            margin: 2px 6px 0px 6px; 

            img {
              height: 20px;
            }
          }
        }
      }
    }
  }

</style>