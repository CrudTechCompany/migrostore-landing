<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>Migrostore</title>
        <meta name="description" content="Migrostore - one store shop platform for Ukrainians in Poland.">
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
        <link rel="manifest" href="/favicon/site.webmanifest">
        <link rel="shortcut icon" href="/favicon/favicon.ico">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <noscript data-n-css=""></noscript>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
        
        @viteReactRefresh
        @vite('resources/js/App.jsx')

    </head>
    <body style="margin:0">
        <div id="root"></div>
    </body>
</html>
