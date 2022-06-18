<template>
  <div>
    <div class="contenedor m-t-12">
      <h1>Reticula</h1>
      <h2>Contenedores</h2>
      <p style="background: rgba(0,0,0,.1);">
        class="<b>contenedor</b>"
      </p>
    </div>
    <div class="contenedor ancho-fijo">
      <p style="background: rgba(0,0,0,.1);">
        class="<b>contenedor</b> <b>ancho-fijo</b>"
      </p>
    </div>
    <div class="contenedor ancho-lectura">
      <p style="background: rgba(0,0,0,.1);">
        class="<b>contenedor</b> <b>ancho-lectura</b>"
      </p>
    </div>

    <div class="contenedor ancho-fijo">
      <div class="flex flex-wrap a11y-simplificada-contenedor">
        <div class="flex-basis-4" style="background: rgba(0,90,0,.1);">
          <p>
            Si existe como padre la clase <b>a11y-simplificada</b>
            que debe estar conectada con el store para poder prender o apagar
          </p>
        </div>
        <div class="flex-basis-3" style="background: rgba(0,0,90,.1);">
          <p>
            Para el contenedor con clase <b>a11y-simplificada-contenedor</b>
            reformatea el contenido que sea que tiene a dos columnas
          </p>
        </div>
        <div class="flex-basis-2"  style="background: rgba(90,0,0,.1);">
          <p>
            parrafo ejemplo
          </p>
        </div>
        <div class="flex-basis-1" style="background: rgba(90,90,0,.1);">
          <p>
            parrafo ejemplo
          </p>
        </div>
      </div>
    </div>

    <div class="contenedor m-y-6">
      <h2>Columnas</h2>
      <h3>flex flex-wrap</h3>
      <div class="flex flex-wrap">
        <div class="flex-basis-3 flex-basis-5-esc flex-basis-2-tab">
          <p style="background: rgba(255,0,0,.25);">flex-basis-3 flex-basis-5-esc flex-basis-2-tab</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="flex-basis-2">
          <p style="background: rgba(255,0,0,.25);">flex-basis-2</p>
        </div>
        <div class="flex-basis-2">
          <p style="background: rgba(255,0,0,.25);">flex-basis-2</p>
        </div>
        <div class="flex-basis-2">
          <p style="background: rgba(255,0,0,.25);">flex-basis-2</p>
        </div>
        <div class="flex-basis-2">
          <p style="background: rgba(255,0,0,.25);">flex-basis-2</p>
        </div>
        <div class="flex-basis-2">
          <p style="background: rgba(255,0,0,.25);">flex-basis-2</p>
        </div>
        <div class="flex-basis-2">
          <p style="background: rgba(255,0,0,.25);">flex-basis-2</p>
        </div>
      </div>
      <div class="flex">
        <div class="flex-basis-3">
          <p style="background: rgba(255,0,0,.25);">flex-basis-3</p>
        </div>
      </div>
      <div class="flex">
        <div class="flex-basis-4">
          <p style="background: rgba(255,0,0,.25);">flex-basis-4</p>
        </div>
      </div>
      <div class="flex">
        <div class="flex-basis-5">
          <p style="background: rgba(255,0,0,.25);">flex-basis-5</p>
        </div>
      </div>
      <div class="flex">
        <div class="flex-basis-6">
          <p style="background: rgba(255,0,0,.25);">flex-basis-6</p>
        </div>
      </div>
      <div class="flex">
        <div class="flex-basis-7">
          <p style="background: rgba(255,0,0,.25);">flex-basis-7</p>
        </div>
      </div>
      <div class="flex">
        <div class="flex-basis-8">
          <p style="background: rgba(255,0,0,.25);">flex-basis-8</p>
        </div>
      </div>
      <div class="flex">
        <div class="flex-basis-9">
          <p style="background: rgba(255,0,0,.25);">flex-basis-9</p>
        </div>
      </div>
      <div class="flex">
        <div class="flex-basis-10">
          <p style="background: rgba(255,0,0,.25);">flex-basis-10</p>
        </div>
      </div>
      <div class="flex">
        <div class="flex-basis-11">
          <p style="background: rgba(255,0,0,.25);">flex-basis-11</p>
        </div>
      </div>
      <div class="flex">
        <div class="flex-basis-12">
          <p style="background: rgba(255,0,0,.25);">flex-basis-12</p>
        </div>
      </div>
    
      <h3>flex flex-wrap flex-gap-0</h3>
      <div class="flex flex-wrap flex-gap-0">
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
        <div class="flex-basis-1">
          <p style="background: rgba(255,0,0,.25);">flex-basis-1</p>
        </div>
      </div>

      <h3>flex flex-wrap flex-gap-9</h3>
      <div class="flex flex-wrap flex-gap-9">
        <div class="flex-basis-2">
          <p style="background: rgba(255,0,0,.25);">flex-basis-2</p>
        </div>
        <div class="flex-basis-2">
          <p style="background: rgba(255,0,0,.25);">flex-basis-2</p>
        </div>
        <div class="flex-basis-2">
          <p style="background: rgba(255,0,0,.25);">flex-basis-2</p>
        </div>
        <div class="flex-basis-2">
          <p style="background: rgba(255,0,0,.25);">flex-basis-2</p>
        </div>
        <div class="flex-basis-2">
          <p style="background: rgba(255,0,0,.25);">flex-basis-2</p>
        </div>
        <div class="flex-basis-2">
          <p style="background: rgba(255,0,0,.25);">flex-basis-2</p>
        </div>
      </div>
    </div>

    <div class="contenedor m-y-6">
      <h3>grid</h3>
      <div class="grid">
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
      </div>
      <div class="grid">
        <div class="grid-column-2">
          <p style="background: rgba(0,0,255,.25);">.grid-column-2</p>
        </div>
      </div>
      <div class="grid">
        <div class="grid-column-3">
          <p style="background: rgba(0,0,255,.25);">.grid-column-3</p>
        </div>
      </div>
      <div class="grid">
        <div class="grid-column-4">
          <p style="background: rgba(0,0,255,.25);">.grid-column-4</p>
        </div>
      </div>
      <div class="grid">
        <div class="grid-column-5">
          <p style="background: rgba(0,0,255,.25);">.grid-column-5</p>
        </div>
      </div>
      <div class="grid">
        <div class="grid-column-6">
          <p style="background: rgba(0,0,255,.25);">.grid-column-6</p>
        </div>
      </div>
      <div class="grid">
        <div class="grid-column-7">
          <p style="background: rgba(0,0,255,.25);">.grid-column-7</p>
        </div>
      </div>
      <div class="grid">
        <div class="grid-column-8">
          <p style="background: rgba(0,0,255,.25);">.grid-column-8</p>
        </div>
      </div>
      <div class="grid">
        <div class="grid-column-9">
          <p style="background: rgba(0,0,255,.25);">.grid-column-9</p>
        </div>
      </div>
      <div class="grid">
        <div class="grid-column-10">
          <p style="background: rgba(0,0,255,.25);">.grid-column-10</p>
        </div>
      </div>
      <div class="grid">
        <div class="grid-column-11">
          <p style="background: rgba(0,0,255,.25);">.grid-column-11</p>
        </div>
      </div>
      <div class="grid">
        <div class="grid-column-12">
          <p style="background: rgba(0,0,255,.25);">.grid-column-12</p>
        </div>
      </div>

      <h3>grid gap-0</h3>
      <div class="grid gap-0">
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
        <div class="grid-column-1">
          <p style="background: rgba(0,0,255,.25);">.grid-column-1</p>
        </div>
      </div>

      <h3>grid gap-9</h3>
      <div class="grid gap-9">
        <div class="grid-column-2">
          <p style="background: rgba(0,0,255,.25);">.grid-column-2</p>
        </div>
        <div class="grid-column-2">
          <p style="background: rgba(0,0,255,.25);">.grid-column-2</p>
        </div>
        <div class="grid-column-2">
          <p style="background: rgba(0,0,255,.25);">.grid-column-2</p>
        </div>
        <div class="grid-column-2">
          <p style="background: rgba(0,0,255,.25);">.grid-column-2</p>
        </div>
      </div>
    </div>

    <div class="contenedor m-y-6">
      <h3>columns-3</h3>
      <div class="columns-3">
        <p style="background: rgba(0,255,0,.25);">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat alias ullam repudiandae magni, aut quam est quia? Beatae, porro incidunt veritatis cumque recusandae, quis qui quisquam, tempora voluptates veniam ducimus?</p>
        <p style="background: rgba(0,255,0,.25);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ipsum impedit animi, voluptas culpa ex quisquam sequi molestiae quam aspernatur numquam doloribus laboriosam pariatur quod unde, doloremque dignissimos quae. Magni.</p>
        <p style="background: rgba(0,255,0,.25);">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus maxime earum culpa obcaecati, odio laudantium inventore sunt deserunt sed, totam excepturi optio tempore fugiat quo atque autem hic similique ipsa.</p>
        <p style="background: rgba(0,255,0,.25);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta enim aut non harum assumenda recusandae numquam perferendis dolor veniam. Ut nobis, ipsam odio atque iste sequi vitae assumenda facere!</p>
        <p style="background: rgba(0,255,0,.25);">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat alias ullam repudiandae magni, aut quam est quia? Beatae, porro incidunt veritatis cumque recusandae, quis qui quisquam, tempora voluptates veniam ducimus?</p>
        <p style="background: rgba(0,255,0,.25);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ipsum impedit animi, voluptas culpa ex quisquam sequi molestiae quam aspernatur numquam doloribus laboriosam pariatur quod unde, doloremque dignissimos quae. Magni.</p>
        <p style="background: rgba(0,255,0,.25);">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus maxime earum culpa obcaecati, odio laudantium inventore sunt deserunt sed, totam excepturi optio tempore fugiat quo atque autem hic similique ipsa.</p>
        <p style="background: rgba(0,255,0,.25);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta enim aut non harum assumenda recusandae numquam perferendis dolor veniam. Ut nobis, ipsam odio atque iste sequi vitae assumenda facere!</p>
      </div>

      <h3>columns-3 columns-2-tab columns-1-mov</h3>
      <div class="columns-3 columns-2-tab columns-1-mov">
        <p style="background: rgba(0,255,0,.25);">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat alias ullam repudiandae magni, aut quam est quia? Beatae, porro incidunt veritatis cumque recusandae, quis qui quisquam, tempora voluptates veniam ducimus?</p>
        <p style="background: rgba(0,255,0,.25);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ipsum impedit animi, voluptas culpa ex quisquam sequi molestiae quam aspernatur numquam doloribus laboriosam pariatur quod unde, doloremque dignissimos quae. Magni.</p>
        <p style="background: rgba(0,255,0,.25);">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus maxime earum culpa obcaecati, odio laudantium inventore sunt deserunt sed, totam excepturi optio tempore fugiat quo atque autem hic similique ipsa.</p>
        <p style="background: rgba(0,255,0,.25);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta enim aut non harum assumenda recusandae numquam perferendis dolor veniam. Ut nobis, ipsam odio atque iste sequi vitae assumenda facere!</p>
        <p style="background: rgba(0,255,0,.25);">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat alias ullam repudiandae magni, aut quam est quia? Beatae, porro incidunt veritatis cumque recusandae, quis qui quisquam, tempora voluptates veniam ducimus?</p>
        <p style="background: rgba(0,255,0,.25);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ipsum impedit animi, voluptas culpa ex quisquam sequi molestiae quam aspernatur numquam doloribus laboriosam pariatur quod unde, doloremque dignissimos quae. Magni.</p>
        <p style="background: rgba(0,255,0,.25);">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus maxime earum culpa obcaecati, odio laudantium inventore sunt deserunt sed, totam excepturi optio tempore fugiat quo atque autem hic similique ipsa.</p>
        <p style="background: rgba(0,255,0,.25);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta enim aut non harum assumenda recusandae numquam perferendis dolor veniam. Ut nobis, ipsam odio atque iste sequi vitae assumenda facere!</p>
      </div>
    </div>
  </div>
</template>
