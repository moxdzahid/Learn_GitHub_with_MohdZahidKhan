document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const contentFrame = document.getElementById('content-frame');

    const tabFiles = {
        'intro': 'git_introdunction/intro.html',
        'github-contribution': 'gitcontributions/githubcontribution.html',
        'git-reset': 'git_reset_&_error/git_reset_&_errors.html',
        'git-amend': 'git_wrong_commit/git_wrong_commit.html',
        'multiple-accounts': 'git_multiple_account/Multiple_git_account.html'
    };

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const fileName = tabFiles[button.getAttribute('data-tab')];
            if (fileName) {
                contentFrame.style.opacity = '0';
                setTimeout(() => contentFrame.src = fileName, 150);
            }
        });
    });

    contentFrame.addEventListener('load', () => {
        contentFrame.style.opacity = '1';
    });
});
