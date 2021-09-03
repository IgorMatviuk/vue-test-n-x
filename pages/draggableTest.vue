<template>
  <div style="height: 900px; width: 100%; border: 1px solid red; position: relative;">
    <vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true">
      <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
    </vue-draggable-resizable>
    <vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true">
        <div class="block-red">
        </div>
    </vue-draggable-resizable>
        <vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true">
        <div class="block-black">
        </div>
    </vue-draggable-resizable>
        <vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true">
        <div class="block-green">
        </div>
    </vue-draggable-resizable>
        <vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true">
        <div class="block-blue">
        </div>
    </vue-draggable-resizable>
        <vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true">
        <div class="block-orange">
        </div>
    </vue-draggable-resizable>

  </div>
</template>

<script>


export default {
  components: {
    VueDraggableResizable: () => import('vue-draggable-resizable')
  },

  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }
  }
}
</script>

<style lang="scss">
    .block-red{
        width: 100px;
        height: 200px;
        background-color: #c0392b;;
    }

    .block-black{
        width: 100px;
        height: 200px;
        background-color: #de5207;
    }

    .block-green{
        width: 400px;
        height: 200px;
        background-color: #ae27a9;
    }

    .block-blue{
        width: 200px;
        height: 200px;
        background-color: #27ad1d;
    }

    .block-orange{
        width: 400px;
        height: 50px;
        background-color: #f39c12;
    }
</style>