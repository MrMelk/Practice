package com.example.demo.registration;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest {
    
    //Skal bruke final? så prøver det etterpå
    private String firstName;
    private String lastName;
    private String password;
    private String email;
}
