<template>
    <div class="nav-bar">
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item><router-link class="nav-bar" to="/delivery">Delivery</router-link></b-nav-item>
                    <b-nav-item href="/">Home</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>

router-link {
    color: white;
}

.nav-bar {
    color: white;
}

</style>