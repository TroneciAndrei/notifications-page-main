const markAsRead = document.querySelector("#mark-read");
const unRead = document.querySelector("#un-read");
const unReadNotifications = document.querySelectorAll(".bg-slate-200");
unRead.textContent = unReadNotifications.length;

markAsRead.addEventListener("click", () => {
  let isRead = true;

  unReadNotifications.forEach((notification) => {
    if (isRead) notification.classList.remove("bg-slate-200");

    if (!notification.classList.contains("bg-slate-200")) {
      unRead.textContent = 0;
    } else {
      unRead.textContent = unReadNotifications.length;
    }
  });
});

let count = unReadNotifications.length;
unReadNotifications.forEach((notification) => {
  notification.addEventListener("click", () => {
    if (notification.classList.contains("bg-slate-200")) {
      notification.classList.remove("bg-slate-200");
      unRead.textContent = count = count - 1;
    }
  });
});
