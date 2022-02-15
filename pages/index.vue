<template>
  <div></div>
</template>

<script>
export default {
  middleware({ redirect }) {
    return redirect('/0/preview');
  },
};
</script>
