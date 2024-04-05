var plusImagePath = "assets/images/icon-plus.svg";
var minusImagePath = "assets/images/icon-minus.svg";

var faqs = [
    ["What is Frontend Mentor, and how will it help me?", "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."],
    ["Is Frontend Mentor free?", "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."],
    ["Can I use Frontend Mentor projects in my portfolio?", "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"],
    ["How can I get help if I'm stuck on a Frontend Mentor challenge?", "You can get help by accessing the community forums on Frontend Mentor. Additionally, you can reach out to mentors and other members for assistance and guidance."],
];

var mainElement = document.getElementById('mainId');
console.log(mainElement);

for (var i = 0; i < faqs.length; i++) {
    (function() {
        var faqId = i;
        var question = faqs[i][0];
        var response = faqs[i][1];

        var newDiv = document.createElement("div");
        var plusImage = '<img id=' + faqId + ' src=' + plusImagePath + '>';
        var hiddenResponse = '<p id=' + faqId.toString() + faqId.toString() + ' hidden="hidden">' + response + '</p>';
        newDiv.innerHTML = '<div class="questiondiv"> <strong>' + question + '</strong>' + plusImage +'</div>'+ hiddenResponse;
        mainElement.appendChild(newDiv);

        newDiv.onclick = function() {
            const element = document.getElementById(faqId.toString());
            var currentPath = element.src;
            var filename = currentPath.replace(/^.*[\\/]/, '');

            let newImagePath;
            if (filename === "icon-minus.svg") {
                newImagePath = plusImagePath;
                var responseElement = document.getElementById(faqId.toString() + faqId.toString());
                responseElement.hidden = "hidden";
            } else {
                newImagePath = minusImagePath;
                var responseElement = document.getElementById(faqId.toString() + faqId.toString());
                responseElement.hidden = "";
            }

            element.src = newImagePath;
        };
    })();
}