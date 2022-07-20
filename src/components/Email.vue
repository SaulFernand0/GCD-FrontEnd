<template>
    <div class="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style="background-image: url(https://www.upeu.edu.pe/wp-content/uploads/2019/07/slider-web-2019.jpg);">
        <div class="absolute bg-black opacity-60 inset-0 z-0"></div>

        <div class="sm:max-w-lg w-full rounded-xl z-10">
            <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                <div class="text-center">
                    <h1 class="mt-5 text-3xl font-bold text-gray-900">Enviar Correo</h1>
                    <p class="mt-2 text-sm text-gray-400">Complete el siguiente formulario para enviar un correo</p>
                </div>
                <div class="m-7">
                    <form action="https://api.web3forms.com/submit" method="POST" id="form">

                        <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE">
                        <input type="hidden" name="subject" value="New Submission from Web3Forms">
                        <input type="checkbox" name="botcheck" id="" style="display: none;">

                        <div class="mb-6">
                            <label for="email" class="text-sm font-bold text-gray-500 tracking-wide">Destinatario</label>
                            <input type="email" name="email" id="email" placeholder="Ingrese el correo del destinatario" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                        </div>
                        <div class="mb-6">
                            <label for="name" class="text-sm font-bold text-gray-500 tracking-wide">Titulo</label>
                            <input type="text" name="name" id="name" placeholder="Titulo del mensaje" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                        </div>
                        <div class="mb-6">
                            <label for="message" class="text-sm font-bold text-gray-500 tracking-wide">Mensaje</label>

                            <textarea rows="5" name="message" id="message" placeholder="Tu mensaje" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                        </div>

                        <div class="mb-6">
                            <button type="submit" class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">Enviar Correo</button>
                        </div>
                        <p class="text-base text-center text-gray-400" id="result">
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

</style>