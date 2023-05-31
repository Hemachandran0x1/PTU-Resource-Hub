package com.mscomm.contributeservice;


import org.junit.jupiter.api.Test;

import com.mscomm.contributeservice.entity.Contribute;

import static org.junit.jupiter.api.Assertions.*;

class ContributeTest {

    @Test
    void testConstructorAndGetters() {
        Long id = 1L;
        String subject = "FSD";
        String unit = "SpringBoot";
        String topic = "Microservices";
        String description = "Introduction to Microservices";
        String url = "https://example.com";
        int approve = 0;

        Contribute contribute = new Contribute(id, subject, unit, topic, description, url, approve);

        assertEquals(id, contribute.getId());
        assertEquals(subject, contribute.getSubject());
        assertEquals(unit, contribute.getUnit());
        assertEquals(topic, contribute.getTopic());
        assertEquals(description, contribute.getDescription());
        assertEquals(url, contribute.getUrl());
        assertEquals(approve, contribute.getApprove());
    }

    @Test
    void testSetterAndGetters() {
        Contribute contribute = new Contribute();

        Long id = 1L;
        String subject = "FSD";
        String unit = "SpringBoot";
        String topic = "Microservices";
        String description = "Introduction to Microservices";
        String url = "https://example.com";
        int approve = 0;

        contribute.setId(id);
        contribute.setSubject(subject);
        contribute.setUnit(unit);
        contribute.setTopic(topic);
        contribute.setDescription(description);
        contribute.setUrl(url);
        contribute.setApprove(approve);

        assertEquals(id, contribute.getId());
        assertEquals(subject, contribute.getSubject());
        assertEquals(unit, contribute.getUnit());
        assertEquals(topic, contribute.getTopic());
        assertEquals(description, contribute.getDescription());
        assertEquals(url, contribute.getUrl());
        assertEquals(approve, contribute.getApprove());
    }
}
