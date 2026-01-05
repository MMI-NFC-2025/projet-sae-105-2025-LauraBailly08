# Script de correction des chemins d'images
$ErrorActionPreference = "Stop"

cd "c:\Users\laura\OneDrive\Documents\GitHub\projet-sae-105-2025-LauraBailly08\fr"

# Tableaux de remplacement
$replacements = @{
    'assets/logo-matilda.svg' = 'assets/img/logo-matilda.svg'
    'assets/logo matilda.svg' = 'assets/img/logo-matilda.svg'
    'assets/icone_calendrier.svg' = 'assets/img/icone_calendrier.svg'
    'assets/icone_horloge.svg' = 'assets/img/icone_horloge.svg'
    'assets/icone-glossaire.svg' = 'assets/img/icone-glossaire.svg'
    'assets/icone glossaire.svg' = 'assets/img/icone-glossaire.svg'
    'assets/image-1-qui-etait-lise-meitner.avif' = 'assets/img/image--1-qui-etait-lise-meitner.avif'
    'assets/image-2-qui-etait-lise-meitner.avif' = 'assets/img/image-2-qui-était-lise-meitner.avif'
    'assets/image-3-qui-etait-lise-meitner.avif' = 'assets/img/image-3-qui-etait-lise-meitner.avif'
    'assets/image-1-sa-decouverte.avif' = 'assets/img/image-1-sa-decouverte.avif'
    'assets/image-2-sa-decouverte.avif' = 'assets/img/image-2-sa-découverte.avif'
    'assets/image-1-les-femmes-de-science.avif' = 'assets/img/image-1-les-femmes-de-science.avif'
    'assets/image-2-les-femmes-de-science.avif' = 'assets/img/image-2-les-femmes-de-science.avif'
    'assets/image-1-cinema.avif' = 'assets/img/image-1-cinéma.avif'
    'assets/image-2-cinema.avif' = 'assets/img/image-2-cinéma.avif'
    'assets/image-3-cinema.avif' = 'assets/img/image-3-cinéma.avif'
    'assets/image-4-cinema.avif' = 'assets/img/image-4-cinéma.avif'
    'assets/image-5-cinema.avif' = 'assets/img/image-5-cinéma.avif'
    'assets/image-6-cinema.avif' = 'assets/img/image-6-cinéma.avif'
    "assets/sa decouverte page d'accueil.avif" = "assets/img/sa-decouverte-page-d'accueil.avif"
    'assets/sa-decouverte-page-accueil.avif' = "assets/img/sa-decouverte-page-d'accueil.avif"
    'assets/image-1-page-accueil.avif' = 'assets/img/image-1-page-accueil.avif'
    'assets/image-2-page-accueil.avif' = 'assets/img/image-2-page-accueil.avif'
    'assets/image-3-femmes-science-page-accueil.avif' = 'assets/img/image-3-femmes-science-page-accueil.avif'
    "assets/image article femme science page d'aaccueil.avif" = "assets/img/image-article-femme-science-page-d'aaccueil.avif"
    "assets/image article cinema page d'accueil.avif" = "assets/img/image-article-cinema-page-d'accueil.avif"
    "assets/image article hidden figure page d'accueil.avif" = "assets/img/image-article-hidden-figure-page-d'accueil.avif"
    'assets/image-article-hidden-figure-page-daccueil.avif' = "assets/img/image-article-hidden-figure-page-d'accueil.avif"
    "assets/image1 page d'accueil.avif" = "assets/img/image1-page-d'accueil.avif"
    'assets/image1-page-accueil.avif' = "assets/img/image1-page-d'accueil.avif"
    'assets/image1-page-daccueil.avif' = "assets/img/image1-page-d'accueil.avif"
    'assets/image-article-cinema-page-daccueil.avif' = "assets/img/image-article-cinema-page-d'accueil.avif"
}

$files = @("index.html", "article-1.html", "article-2.html", "article-3.html", "article-4.html", "article-5.html", "glossaire.html", "contact.html", "à-propos.html", "autres-projets.html")

foreach($file in $files) {
    Write-Host "Traitement de $file..."
    $content = Get-Content $file -Raw -Encoding UTF8
    
    foreach($key in $replacements.Keys) {
        $content = $content.Replace($key, $replacements[$key])
    }
    
    Set-Content $file -Value $content -Encoding UTF8 -NoNewline
    Write-Host "  $file traité"
}

Write-Host "Terminé!"
