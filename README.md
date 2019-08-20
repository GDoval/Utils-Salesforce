# Utils-Salesforce

Repo donde guardar las clases/métodos que se generaron para diversos proyectos en Salesforce y que sean pasibles de reutilización. Dentro del Readme se van a ir agregando las descripciones de qué hace cada uno.


- PickListDependientes
  - Trae los valores de picklists de un objeto, a partir de una picklist de control. O sea, si picklist_B depende de picklist_A, la función mapea todos los valores de picklist_B para cada valor de picklist_A.
  -Link de referencia: [https://salesforce.stackexchange.com/questions/4462/get-lists-of-dependent-picklist-options-in-apex]
 
- ImprimirAttachments
  - Recupera el body de un Attachment y lo descarga como PDF desde una VF, usando Javascript
