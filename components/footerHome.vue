<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3 class="footer-logo">
          MORENT
        </h3>
        <p class="footer-description">
          Our vision is to provide convenience and help increase your sales business.
        </p>
      </div>
      <div class="footer-links">
        <div class="footer-column">
          <h4>About</h4>
          <ul>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Featured</a></li>
            <li><a href="#">Partnership</a></li>
            <li><a href="#">Business Relation</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Events</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Podcast</a></li>
            <li><a href="#">Invite a friend</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Socials</h4>
          <ul>
            <li><a href="#">Discord</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>©2022 MORENT. All rights reserved</p>
      <div class="footer-policy">
        <a href="#">Privacy & Policy</a>
        <a href="#">Terms & Condition</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>
<style scoped>
.footer {
  background-color: #fff;
  padding: 40px;
  font-family: Arial, sans-serif;
  color: #333;
  border-top: 1px solid #e5e5e5;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-section {
  max-width: 250px;
}

.footer-logo {
  color: #1976d2;
  font-size: 24px;
  margin-bottom: 10px;
}

.footer-description {
  color: #7a7a7a;
  font-size: 14px;
  line-height: 1.5;
}

.footer-links {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  max-width: 600px;
  justify-content: space-between;
}

.footer-column {
  min-width: 150px;
}

.footer-column h4 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column li {
  margin-bottom: 8px;
}

.footer-column a {
  text-decoration: none;
  color: #7a7a7a;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-column a:hover {
  color: #1976d2;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #e5e5e5;
  font-size: 14px;
  color: #7a7a7a;
}

.footer-policy a {
  margin-left: 15px;
  text-decoration: none;
  color: #7a7a7a;
  transition: color 0.3s;
}

.footer-policy a:hover {
  color: #1976d2;
}

</style>
