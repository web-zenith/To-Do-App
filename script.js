console.clear();
let work_name_input = document.querySelector("#work");
let work_name_submit = document.querySelector("#add");
let work_div = document.querySelector(".added_works");
let itemarr;
work_name_input.onkeydown = function (e) {
    if (e.key === "Enter") {
        work_name_submit.click();
    }
};
work_name_submit.onclick = function () {
    let old_storage = JSON.parse(localStorage.getItem("works"));
    if (old_storage !== null) {
        old_storage = old_storage;
        itemarr = {
            work_name: work_name_input.value,
            work_date: new Date(),
            work_status: false,
            work_count: old_storage.length,
        };
        old_storage.push(itemarr);
        let new_storage = old_storage;
        localStorage.setItem("works", JSON.stringify(new_storage));
    } else {
        itemarr = {
            work_name: work_name_input.value,
            work_date: new Date(),
            work_status: false,
            work_count: 0,
        };
        localStorage.setItem("works", JSON.stringify([itemarr]));
    }
    location.reload(true);
};

let array = JSON.parse(localStorage.getItem("works"));
if (array !== null) {
    array.forEach((element, index) => {
        work_div.innerHTML += `
    <div class="work">
    <p class="workname">${index + 1}) ${element.work_name}</p>
    <div class="actions">
        <button class="done ${
            element.work_status
        }"onclick="let lclstrg = JSON.parse(localStorage.getItem('works'));if(this.classList.contains('true')){lclstrg[${index}].work_status=false;this.classList.remove('true');console.log(lclstrg);localStorage.setItem('works',JSON.stringify(lclstrg));}else{lclstrg[${index}].work_status=true;this.classList.add('true');console.log(lclstrg);localStorage.setItem('works',JSON.stringify(lclstrg));}"><i class="fa fa-check"></i></button>
        <button class="remove" onclick="let works = JSON.parse(localStorage.getItem('works'));works.splice(${index}, 1);localStorage.setItem('works',JSON.stringify(works));location.reload('true');"><i class="fa fa-times"></i></button>
    </div>
    </div>
`;
    });
}
