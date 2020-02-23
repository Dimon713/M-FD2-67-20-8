function validate() {
    let i, j = [];
    for (i = form.elements.length - 1; i >= 0; i = i - 1) {
        switch (form.elements[i].nodeName) {
            case 'Input':
                switch (form.elements[i].name) {
                    case 'developer':
                        validateDeveloper();
                    case 'SiteName':
                        validateSiteName()
                    case ''
                }
        }
    }
}