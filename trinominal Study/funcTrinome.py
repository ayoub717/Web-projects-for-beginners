#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Ayoub Unitop~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#=================================================================== projets 1bac sm fonction numerique ===============================================================
#--------------------------------------------------------------------Etude d'une fonction trinome ---------------------------------------------------------------------
# tasks ---------------------------------------------------------------------------------------------------------------------------------------------------------------
# 1 import libraries and window
import tkinter
root = tkinter.Tk()
root.geometry('500x500')
root.title("Etude d'une fonction trinome")
# 2 create main fonction and logic
def Study():
    a = float(entry_a.get())
    b = float(entry_b.get())
    num = (-b)/(2*a)
    if a >= 0:
        lbl_result.config(text= f"-f est decroissonte sur moins l'infini {num} \n-f st croissante sur {num} plus l'infini")
    else:
        lbl_result.config(text= f"-f est croissonte sur moins l'infini {num} \n-f st decroissante sur {num} plus l'infini")

# 3 create Gpu 
lbl_title = tkinter.Label(root, text="Etude d'une fonction trinome" ,font=('Arial', 20), fg='red')
lbl_title.place(y=10 , x =100)
lbl_fx = tkinter.Label(root, text="f(x) = ", font=("Arial", 10))
lbl_fx.place(y=100 , x= 100)
entry_a = tkinter.Entry(root, width=5)
entry_a.place(y= 100, x= 150)
lab_xcar = tkinter.Label(root, text="x^2 ", font=('Arial', 10))
lab_xcar.place(y=100, x= 190)
lbl_plus = tkinter.Label(root, text="+ ")
lbl_plus.place(y = 100, x = 230)
entry_b = tkinter.Entry(root, width = 5)
entry_b.place(y=100, x= 270)
lbl_x = tkinter.Label(root, text="x", font=('Arial', 10))
lbl_x.place(y=100, x= 310)
lbl_plus1 = tkinter.Label(root, text="+ ")
lbl_plus1.place(y = 100, x = 350)
entry_c = tkinter.Entry(root, width=5)
entry_c.place(y=100, x= 390)
btn = tkinter.Button(root, text="Etudier", command=Study,padx=30,pady=5, bg='red', fg='white' ,font=('Arial', 13),)
btn.place(y=150, x=200)
lbl_result = tkinter.Label(root, text="Voir l'etude ici", font=('Arial', 10))
lbl_result.place(y=250, x=40)
# 4 wind main loop
root.mainloop()
#finsh===================================================================================================================================================================