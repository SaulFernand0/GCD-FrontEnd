<template>
    <div class="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style="background-image: url(https://www.upeu.edu.pe/wp-content/uploads/2019/07/slider-web-2019.jpg);">
            <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
                <div class="text-center">
                    <h2 class="mt-5 text-3xl font-bold text-gray-900">
                        Subir Archivo
                    </h2>
                    <p class="mt-2 text-sm text-gray-400">Seleccione el archivo que desea subir</p>
                </div>
                <form class="mt-8 space-y-3" action="#" method="POST">
                        <div class="grid grid-cols-1 space-y-2">
                            <label class="text-sm font-bold text-gray-500 tracking-wide">Adjuntar archivo</label>
                            <div class="flex items-center justify-center w-full">
                                <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                    <div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                                        <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                            <img class="has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image">
                                        </div>
                                        <p class="pointer-none text-gray-500 "><span class="text-sm">Arrastre y suelte archivos aquí</span> <br/> o <a href="" id="" class="text-blue-600 hover:underline">seleccione el archivo</a> de su escritorio</p>
                                    </div>
                                    <input type="file" class="hidden">
                                </label>
                            </div>
                        </div>

                        <p class="text-sm text-gray-300">
                            <span>Tipos de archivo: doc, pdf, zip, jpg, png</span>
                        </p>

                        <div>
                            <button type="submit" class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
                                Subir
                            </button>
                        </div>
                </form>
            </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .has-mask {
		position: absolute;
		clip: rect(10px, 150px, 130px, 10px);
	}
</style>