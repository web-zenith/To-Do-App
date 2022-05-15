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
        }"onclick="let lclstrg = JSON.parse(localStorage.getItem('works'));if(this.classList.contains('true')){lclstrg[${index}].work_status=false;this.classList.remove('true');console.log(lclstrg);localStorage.setItem('works',JSON.stringify(lclstrg));}else{lclstrg[${index}].work_status=true;this.classList.add('true');console.log(lclstrg);localStorage.setItem('works',JSON.stringify(lclstrg));}">
            <i class="fa fa-check"></i>
        </button>
        <button class="edit" onclick="this.parentElement.querySelector('.editpopup').style.display = 'block';">
            <i class="fa fa-pen"></i>
        </button>
        <button class="remove" onclick="document.body.scrollTop = document.documentElement.scrollTop = 0;this.parentElement.parentElement.querySelector('.popup').style.display='block'">
            <i class="fa fa-trash-can"></i>
        </button>
        <div class="editpopup">
                            <h3>Task ${index+1}</h3><i class="fa fa-times" onclick="this.parentElement.style.display='none';"></i><br><br>
                            <input
                                type="text"
                                value="${element.work_name}"
                                id="inputedit"
                            />
                            <button style="background: white;
                            color:black;
                            padding: 10px;
                            border: 1px solid #424242;border-radius: 10px;" onclick="let lklstrg = JSON.parse(localStorage.getItem('works'));
                            lklstrg[${index}].work_name = this.parentElement.querySelector('#inputedit').value;
                            localStorage.setItem('works',JSON.stringify(lklstrg));this.parentElement.style.display='none';location.reload(true);" class="save"><i class="fa fa-save" ></i>&nbsp;&nbsp;Save</button></div>
    </div>
    <div class="popup">
                <div class="nav">
                    <p><i class="fa fa-warning"></i>Warning!</p>
                    <i class="fa fa-times" onclick="this.parentElement.parentElement.style.display='none'"></i>
                </div>
                <br><br>
                Are you sure that you want to remove the task?<br>
                A removed task can not be restored!
                <br><br>
                <button class="remove" onclick="let works = JSON.parse(localStorage.getItem('works'));works.splice(${index}, 1);localStorage.setItem('works',JSON.stringify(works));location.reload('true');"><i class="fa fa-trash-can"></i> Remove</button>
            </div>
    </div>
`;
    });
    function save(a) {
        // let lklstrg = JSON.parse(localStorage.getItem('works'));
        // lklstrg[${index}].work_name = this.parentElement.querySelector('input').value;
        // localStorage.setItem(JSON.stringify(lklstrg));

    }
}
