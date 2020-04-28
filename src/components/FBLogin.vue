<template>
    <div>
        <v-facebook-login v-model="model" app-id="1123685327970478" @sdk-init="onSdkInit" @login="onLogin" @logout='onLogout'>
        </v-facebook-login>
    </div>
</template>



<script>
    import axios from 'axios'
    import VFacebookLogin from 'vue-facebook-login-component'

    export default {
        name: 'FBLogin',
        data: () => ({
            FB: {},
            model: {},
            scope: {},
            user: {}
        }),
        components: {
            VFacebookLogin
        },
        computed: {
            getUser() {
                return this.$store.state.user
            }
        },
        methods: {
            getUserData() {
                this.FB.api(
                    '/me', {
                        fields: 'id, name, picture'
                    },
                    (user) => {
                    let urlPost = this.$store.state.apiBase + "user/"
                    let urlGet = this.$store.state.apiBase + "user/" + user.id
                    axios.post(urlPost, {
                        fbId: user.id,
                        name: user.name,
                        avatarUrl: user.picture.data.url
                    }).then(() => {
                        axios.get(urlGet).then((result) => {
                            delete result.data._id
                            delete result.data.__v
                            this.$store.state.user.info = result.data
                            this.$store.state.user.logedIn = true
                        }).catch((err) => {
                            console.log(err)
                        })
                    }).catch((err) => {
                        console.log(err)
                    })
                    }
                )
            },
            onSdkInit({
                FB,
                scope
            }) {
                this.FB = FB
                this.scope = scope
            },
            onLogin() {
                this.getUserData()
            },
            onLogout() {
                this.$store.state.user.logedIn = false
            }
        }
    }
</script>


<style scoped>

  button {
      margin: auto;
  }

</style>