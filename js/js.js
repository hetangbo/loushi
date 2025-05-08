function showSection(sectionId) {
            // 隐藏所有部分
            const sections = document.getElementsByClassName('section');
            for (let i = 0; i < sections.length; i++) {
                sections[i].style.display = 'none';
            }

            // 显示选中的部分
            const selectedSection = document.getElementById(sectionId);
            if (selectedSection) {
                selectedSection.style.display = 'block';
            }
        }