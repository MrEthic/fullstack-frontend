<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="input-group-1" label="J'ai faim :" label-for="input-1">
                <b-form-select id="input-1" v-model="form.food" :options="foods" required>
                </b-form-select>
            </b-form-group>
            <b-form-group id="input-group-2" label="J'ai soif :" label-for="input-2">
                <b-form-select id="input-2" v-model="form.drink" :options="drinks" required>
                </b-form-select>
            </b-form-group>
            <b-form-group id="input-group-3" label="Salle" label-for="input-3"
                description="Si la salle est incompréhensible pas de nouriture déso">
                <b-form-input id="input-1" v-model="form.room" required placeholder="Précisez le batiment">
                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>



<script>
    export default {
        name: 'Delivery',
        data() {
            return {
                form: {
                    room: '',
                    food: null,
                    drink: null
                },
                foods: [{
                    text: 'Choisissez en un',
                    value: null
                }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                drinks: [{
                    text: 'Choisissez en un',
                    value: null
                }, 'Coca', 'Fanta', 'Eau'],
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.drink = null
                this.form.food = null
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>


<style>

</style>