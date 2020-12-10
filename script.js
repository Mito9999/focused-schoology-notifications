const notificationsQueryString = "#main-inner > div.item-list > ul > li > div > div > div:nth-child(1) > .notify-icon";

const removeUselessNotifications = () => {
    document
        .querySelectorAll(notificationsQueryString)
        .forEach(element => {
            if (element.classList[0] === "comment-notif") {
                element.parentElement.parentElement.parentElement.parentElement.remove();
            }
        });
    document
        .querySelectorAll(".notif-date-header")
        .forEach(header => header.remove());
}

const clearBtn = document.createElement("button");

clearBtn.textContent = "Clear";
clearBtn.classList.add("clearBtn");
clearBtn.addEventListener("click", () => removeUselessNotifications());

document.querySelector("#center-top").append(clearBtn);