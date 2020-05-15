using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Shoot : Starting_Health
{

    public Transform projectileSpawn;

    public GameObject projectile;



    public float nextFire = 1.0f;
    public float currentTime = 0.0f;



    // Use this for initialization
    void Start()
    {





        projectileSpawn = this.gameObject.transform;
    }

    // Update is called once per frame
    void Update()
    {
        shoot();
    }

    public void shoot()
    {
        currentTime += Time.deltaTime;

        // Checks if on cooldown
        if (currentTime > nextFire)
        {
            //nextFire += currentTime;

            // Shoots object
            Instantiate(projectile, projectileSpawn.position, Quaternion.identity);

            // Starts cooldown
            currentTime = 0.0f;
        }
    }
}
