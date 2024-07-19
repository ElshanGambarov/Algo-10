// Funksiya: Başlanğıc və son ədədləri daxil edərək aralarındakı ədədləri tamamlayaraq array qaytarır
function createRange(start, end) {
    // Boş bir array yaradır
    const rangeArray = [];

    // Başlanğıcdan sona qədər olan ədədləri əlavə edir
    for (let i = start; i <= end; i++) {
        rangeArray.push(i);
    }

    // Aralıqdakı ədədləri ehtiva edən arrayi qaytarır
    return rangeArray;
}

// Nümunə istifadəsi
const start = 3;
const end = 7;
const range = createRange(start, end);
console.log("Ədədlər aralığı:", range);