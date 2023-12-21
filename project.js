document.addEventListener("DOMContentLoaded", function () {
    const filterContainer = document.querySelector(".gallery-filter");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("filter-item")) {
            // Deactivate existing active 'filter-item'
            const activeFilter = filterContainer.querySelector(".active");
            if (activeFilter) {
                activeFilter.classList.remove("active");
            }

            // Activate new 'filter-item'
            event.target.classList.add("active");

            const filterValue = event.target.getAttribute("data-filter");

            galleryItems.forEach(function (item) {
                if (filterValue === "All" || item.classList.contains(filterValue) || filterValue---'all') {
                    item.classList.remove("hide");
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            });
        }
    });
});
