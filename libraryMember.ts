export class LibraryMember {
    private name: string
    private borrowedBooks: number

    public constructor(public name1: string){
        this.name = name1
        this.borrowedBooks = 0
    }
    
    public borrowBook(): boolean{
        if(this.borrowedBooks < 3){
            this.borrowedBooks++
            return true
        } else {
            return false
        }
    }

    public returnBook(): boolean{
        if(this.borrowedBooks){
            this.
        }
    }

}