Feature: Formulario Novus

    @formulario
    Scenario: Registro de Formulario
        Given ingreso a la pagina del proyecto
        When ingreso el nombre
        And ingreso apellido
        And ingreso el numero de telefono
        And ingreso correo electronico
        And marco mi pasatiempo
        And elijo mi genero
        And selecciono departamento
        And selecciono ciudad
        And selecciono un comando
        And doy click en enviar
        Then me muestra los datos en pantalla.
        And doy click en close