let count = 0;

function cardTest(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count > 0) {
        return document.write(count + " Yes, you win! <br/>");
    } else {
        return document.write(count + " No, you lose! <br/>");
    }
}
cardTest(2);
cardTest(3);
cardTest(7);
cardTest(10);
cardTest("K");
cardTest("A");
cardTest("Q");