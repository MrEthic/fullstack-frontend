<template>
<div>
    <p>Service Livraison</p>
    <DeliveryForm/>
</div>
</template>

<script>
import DeliveryForm from '../components/DeliveryForm.vue'

export default {
  name: 'Delivery',
  components: {
    DeliveryForm
  }
}
</script>