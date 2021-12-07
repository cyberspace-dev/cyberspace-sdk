export class Utils {

    static convert(timestamp: number) {
        const options: any = {year: 'numeric', month: '2-digit', day: '2-digit'};

        let date = new Date(timestamp).toLocaleDateString('en-GB', options);
        while (date.indexOf('/') > -1) date = date.replace('/', '.');

        return date;
    }

}