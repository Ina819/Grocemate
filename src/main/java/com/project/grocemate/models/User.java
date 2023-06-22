package com.project.grocemate.models;

import jakarta.persistence.*;
import java.sql.Timestamp;
import lombok.*;

@Entity
@Table(name = "customers")
@Getter
@Setter
@EqualsAndHashCode
@ToString(exclude="password")
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Integer customerId;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "customer_name", nullable = false)
    private String customerName;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "reward_points", nullable = false)
    private Integer rewardPoints;

    @Column(name = "register_date", nullable = false)
    private Timestamp registerDate;

    @Column(name = "update_date")
    private Timestamp updateDate;

}

