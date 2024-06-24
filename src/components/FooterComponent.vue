<template>
    <footer class="footer">
        <div class="site-footer">
            <div class="footer-container">
                <div class="footer-left">
                    <h2>Information</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                    <h2>For clients</h2>
                    <ul>
                        <li>Rent Constructions</li>
                        <li>Locations</li>
                        <li>FAQ</li>
                        <li>Privacy and Cookies</li>
                    </ul>
                </div>
                <div class="footer-right">
                    <h2>Welcome</h2>
                    <div class="icon-box">
                        <i class="fas fa-envelope"></i>
                        <p>info@demolink.org</p>
                    </div>
                    <div class="icon-box">
                        <i class="fas fa-phone"></i>
                        <p>+34 910 052 345</p>
                    </div>
                    <div class="icon-box">
                        <i class="fab fa-instagram"></i>
                        <p>RentTech</p>
                    </div>
                    <div class="icon-box">
                        <i class="fab fa-twitter"></i>
                        <p>RentTech</p>
                    </div>
                </div>
            </div>
            <div class="site-info">
                RentTech © 2024 - All Rights Reserved
            </div>
        </div>
    </footer>
</template>

<script setup></script>

<style scoped>
.site-footer {
    padding: 40px 0;
    background-color: #333;
    color: white;
}

.footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-left,
.footer-right {
    flex-basis: 50%;
    margin-bottom: 30px;
    padding: 0 20px;
}

.footer-left h2,
.footer-right h2 {
    font-size: 18px;
    margin-bottom: 15px;
}

.footer-left ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-left ul li,
.footer-right .icon-box p {
    font-size: 14px;
    margin-bottom: 8px;
}

.icon-box {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.icon-box i {
    margin-right: 10px;
}

.site-info {
    opacity: 0.8;
    margin-top: 20px;
    text-align: center;
}
</style>